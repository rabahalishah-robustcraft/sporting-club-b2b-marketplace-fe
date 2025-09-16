"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "./../components/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./../components/card";

import { cn } from "@/lib/utils";
import { Input } from "./../components/input";
import { InputFile } from "../components/InputFile";
import { useNavigate } from "react-router-dom";
// Import the new hook

import { useUpsertAnnualSpend, useUpsertClubProfile } from "@/api/mutations";
import { useGetAllNonCustomCategories } from "@/api/queries";
import { useToast } from "@/hooks";
import { useGlobalContext } from "@/context";
// Import the new mutation hooks

// ---- Zod schema for BreakdownItem ----
const breakdownItemSchema = z.object({
  item_name: z.string().min(1, "Item name is required"),
  unit_price: z.preprocess(
    (a) => (a === "" ? undefined : Number(a)),
    z.number().positive("Unit price must be a positive number").optional()
  ),
  quantity: z.preprocess(
    (a) => (a === "" ? undefined : Number(a)),
    z.number().int().positive("Quantity must be a positive integer").optional()
  ),
  frequency_of_order: z.string().min(1, "Frequency is required"),
  notes: z.string().optional(),
});

// ---- Zod schema for Category ----
const categorySchema = z.object({
  id: z.string().optional(),
  local_id: z.string(),
  name: z.string().min(1, "Category name is required"),
  is_custom: z.boolean(),
  selected: z.boolean(),
  total_annual_spend: z.preprocess(
    (a) => (a === "" ? undefined : Number(a)),
    z.number().nonnegative("Must be a non-negative number").optional()
  ),
  breakdown: z.array(breakdownItemSchema),
});

// ---- Unified Zod schema for the entire form ----
const fullFormSchema = z.object({
  // Step 1: Sporting Club Details
  club_name: z.string().min(1, "Club name is required"),
  abn: z.string().min(1, "ABN is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  postcode: z.string().min(1, "Postcode is required"),
  club_type: z.string().min(1, "Club type is required"),
  num_of_players: z.preprocess(
    (v) => (typeof v === "string" ? parseInt(v, 10) : v),
    z.number().int().positive("Must be a positive number")
  ),
  registered_association: z
    .string()
    .min(1, "Registered association is required"),
  instagram_followers: z.preprocess(
    (v) => (v === "" ? undefined : Number(v)),
    z.number().nonnegative("Must be a non-negative number").optional()
  ),
  contact_person_name: z.string().min(1, "Contact person name is required"),
  contact_person_email: z.string().email("Invalid email"),
  contact_person_phone: z.string().min(1, "Phone is required"),
  logo: z.any().optional(),

  // Step 2 & 3: Category data
  categories: z.array(categorySchema),
});

type FullFormSchema = z.infer<typeof fullFormSchema>;

// helper to create a local id (falls back if crypto not available)
const makeLocalId = () =>
  typeof crypto !== "undefined" && (crypto as any).randomUUID
    ? (crypto as any).randomUUID()
    : `local-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

export const ClubOnBoardingForm = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const totalSteps = 3;
  const [step, setStep] = useState<number>(0);

  // control for showing inline add-custom UI
  const [showAddCustomInput, setShowAddCustomInput] = useState(false);
  const [customCategoryName, setCustomCategoryName] = useState("");

  // fetch categories from the hook
  const { data: nonCustomCategories, isLoading } =
    useGetAllNonCustomCategories();
  // Get mutation functions from the new hooks
  const { mutateAsync: upsertClubProfile } = useUpsertClubProfile();
  const { mutateAsync: upsertAnnualSpend } = useUpsertAnnualSpend();
  const { userInfo } = useGlobalContext();

  // form (profile) - zod validation
  const form = useForm<FullFormSchema>({
    resolver: zodResolver(fullFormSchema),
    defaultValues: {
      club_name: "",
      abn: "",
      country: "",
      state: "",
      city: "",
      address: "",
      postcode: "",
      club_type: "",
      num_of_players: "",
      registered_association: "",
      instagram_followers: undefined,
      contact_person_name: "",
      contact_person_email: "",
      contact_person_phone: "",
      logo: null,
      categories: [],
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const categories = watch("categories");

  // Populate categories once data is fetched from the hook
  useEffect(() => {
    if (nonCustomCategories && nonCustomCategories.length > 0) {
      const initialCategories = nonCustomCategories.map((c: any) => ({
        id: c.id,
        local_id: makeLocalId(),
        name: c.name,
        is_custom: false,
        selected: false,
        total_annual_spend: "",
        breakdown: [],
      }));
      setValue("categories", initialCategories);
    }
  }, [nonCustomCategories, setValue]);

  // Convert file to base64 (for logo)
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = (err) => reject(err);
    });

  // ----------- Category helpers (unified state via useForm) -----------
  const toggleCategorySelected = (localId: string) => {
    const newCategories = categories.map((c) =>
      c.local_id === localId ? { ...c, selected: !c.selected } : c
    );
    setValue("categories", newCategories, { shouldDirty: true });
  };

  const updateCategoryField = (
    localId: string,
    field: keyof FullFormSchema["categories"][0],
    value: any
  ) => {
    const newCategories = categories.map((c) =>
      c.local_id === localId ? { ...c, [field]: value } : c
    );
    setValue("categories", newCategories, { shouldDirty: true });
  };

  const addCustomCategory = (name: string) => {
    if (!name || !name.trim()) {
      showToast({
        content: "Enter a category name",
        type: "error",
      });
      return;
    }
    const newCat = {
      id: undefined,
      local_id: makeLocalId(),
      name: name.trim(),
      is_custom: true,
      selected: true,
      total_annual_spend: undefined,
      breakdown: [],
    };
    setValue("categories", [...categories, newCat], { shouldDirty: true });
    setCustomCategoryName("");
    setShowAddCustomInput(false);
  };

  const addBreakdownItem = (localId: string) => {
    const newCategories = categories.map((c) =>
      c.local_id === localId
        ? {
            ...c,
            breakdown: [
              ...(c.breakdown || []),
              {
                item_name: "",
                unit_price: undefined,
                quantity: undefined,
                frequency_of_order: "",
                notes: "",
              },
            ],
          }
        : c
    );
    setValue("categories", newCategories, { shouldDirty: true });
  };

  const updateBreakdownItem = (
    localId: string,
    itemIndex: number,
    field: keyof FullFormSchema["categories"][0]["breakdown"][0],
    value: any
  ) => {
    const newCategories = categories.map((c) => {
      if (c.local_id !== localId) return c;
      const newBreakdown = (c.breakdown || []).map((b, i) =>
        i === itemIndex ? { ...b, [field]: value } : b
      );
      return { ...c, breakdown: newBreakdown };
    });
    setValue("categories", newCategories, { shouldDirty: true });
  };

  const removeBreakdownItem = (localId: string, itemIndex: number) => {
    const newCategories = categories.map((c) => {
      if (c.local_id !== localId) return c;
      const newBreakdown = (c.breakdown || []).filter(
        (_, i) => i !== itemIndex
      );
      return { ...c, breakdown: newBreakdown };
    });
    setValue("categories", newCategories, { shouldDirty: true });
  };

  // Build payloads and submit
  const onSubmit = async (formData: FullFormSchema) => {
    // If not the final step, just move to the next one
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
      return;
    }

    // Final submit logic
    try {
      // Prepare profile payload from formData
      const profilePayload: any = {
        club_name: formData.club_name,
        abn: formData.abn,
        country: formData.country,
        city: formData.city,
        state: formData.state,
        contact_person_name: formData.contact_person_name,
        contact_person_email: formData.contact_person_email,
        address: formData.address,
        registered_association: formData.registered_association,
        postcode: formData.postcode,
        club_type: formData.club_type,
        instagram_followers: formData.instagram_followers,
        num_of_players: formData.num_of_players,
        contact_person_phone: formData.contact_person_phone,
      };

      // Handle logo (InputFile could give FileList or array)
      const logoField = formData.logo;
      if (logoField && logoField?.length && logoField[0] instanceof File) {
        try {
          profilePayload.logo = await toBase64(logoField[0]);
        } catch (err) {
          console.warn("Failed to convert logo to base64", err);
        }
      } else if (typeof logoField === "string" && logoField) {
        profilePayload.logo = logoField;
      }

      // Prepare annualSpend payload (map categories from formData)
      const annualPayload: any[] = [];
      for (const cat of formData.categories) {
        // Only include categories that are explicitly selected
        if (!cat.selected) continue;

        // map breakdown items
        const breakdown = (cat.breakdown || [])
          .map((b) => {
            // require item_name to include
            if (!b.item_name) return null;
            return {
              item_name: b.item_name,
              unit_price: b.unit_price,
              quantity: b.quantity,
              frequency_of_order: b.frequency_of_order || "",
              notes: b.notes || undefined,
            };
          })
          .filter(Boolean);

        if (cat.is_custom) {
          annualPayload.push({
            custom_category_name: cat.name,
            breakdown,
          });
        } else {
          annualPayload.push({
            category_id: cat.id,
            breakdown,
          });
        }
      }

      // Execute mutations sequentially

      await upsertClubProfile(profilePayload, {
        onSuccess: async () => {
          showToast({
            content: "Club Profile Saved Successfully!",
            type: "success",
          });
          await upsertAnnualSpend(annualPayload, {
            onSuccess: () => {
              showToast({
                content: "Annual Spend Saved Successfully!",
                type: "success",
              });

              reset();
              setStep(0);
              navigate(`/club/${userInfo?.id}/dashboard`);
            },
            onError() {
              showToast({
                content: "Failed to Save Annual Spend",
                type: "error",
              });
            },
          });
        },
        onError() {
          showToast({
            content: "Failed to Save Club Profile",
            type: "error",
          });
        },
      });
    } catch (err: any) {
      console.error("submit error", err);

      showToast({
        content: err?.message || "Submission failed",
        type: "error",
      });
    }
  };

  // frequency options
  const frequencyOptions = [
    "Daily",
    "Weekly",
    "Monthly",
    "Quarterly",
    "Bi-annually",
    "Annually",
    "One-Off",
  ];

  return (
    <div className="flex flex-row m-4">
      {/* Sidebar */}
      <div
        id="sidebar"
        className="space-y-2 mx-auto w-1/4 rounded-2xl border-2 border-[#CBD5E1] sticky flex flex-col items-center"
        style={{
          background: "linear-gradient(to top right, #CBD5E1, #F8FAFC)",
          minHeight: "100vh",
        }}
      >
        <img
          width="120px"
          height="120px"
          className="m-8 -ml-60"
          src="/src/assets/logo/SPORTS_CORP_LOGO.webp"
          alt="sporting club logo"
        />
        <div className="flex items-center mt-36">
          <div id="formprogress">
            {[
              {
                logo: (
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="63"
                      height="63"
                      rx="31.5"
                      stroke="#64748B"
                    />
                    <rect
                      x="10"
                      y="10"
                      width="44"
                      height="44"
                      rx="22"
                      fill="#64748B"
                    />
                    <path
                      d="M40.38 23.46L36 22C36 23.0609 35.5786 24.0783 34.8285 24.8284C34.0783 25.5786 33.0609 26 32 26C30.9392 26 29.9218 25.5786 29.1716 24.8284C28.4215 24.0783 28 23.0609 28 22L23.62 23.46C23.1674 23.6108 22.7836 23.9184 22.5379 24.3273C22.2922 24.7363 22.2007 25.2196 22.28 25.69L22.86 29.16C22.8981 29.3949 23.0187 29.6085 23.2002 29.7625C23.3816 29.9165 23.6121 30.0007 23.85 30H26V40C26 41.1 26.9 42 28 42H36C36.5305 42 37.0392 41.7893 37.4143 41.4142C37.7893 41.0391 38 40.5304 38 40V30H40.15C40.388 30.0007 40.6184 29.9165 40.7999 29.7625C40.9814 29.6085 41.102 29.3949 41.14 29.16L41.72 25.69C41.7994 25.2196 41.7079 24.7363 41.4622 24.3273C41.2165 23.9184 40.8327 23.6108 40.38 23.46Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                dimLogo: (
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <rect
                        x="10"
                        y="10"
                        width="44"
                        height="44"
                        rx="22"
                        fill="#64748B"
                      />
                      <path
                        d="M40.38 23.46L36 22C36 23.0609 35.5786 24.0783 34.8285 24.8284C34.0783 25.5786 33.0609 26 32 26C30.9392 26 29.9218 25.5786 29.1716 24.8284C28.4215 24.0783 28 23.0609 28 22L23.62 23.46C23.1674 23.6108 22.7836 23.9184 22.5379 24.3273C22.2922 24.7363 22.2007 25.2196 22.28 25.69L22.86 29.16C22.8981 29.3949 23.0187 29.6085 23.2002 29.7625C23.3816 29.9165 23.6121 30.0007 23.85 30H26V40C26 41.1 26.9 42 28 42H36C36.5305 42 37.0392 41.7893 37.4143 41.4142C37.7893 41.0391 38 40.5304 38 40V30H40.15C40.388 30.0007 40.6184 29.9165 40.7999 29.7625C40.9814 29.6085 41.102 29.3949 41.14 29.16L41.72 25.69C41.7994 25.2196 41.7079 24.7363 41.4622 24.3273C41.2165 23.9184 40.8327 23.6108 40.38 23.46Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                ),
                description: "Sporting Club Details",
              },
              {
                logo: (
                  <svg
                    width="64"
                    height="84"
                    viewBox="0 0 64 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="10.5"
                      width="63"
                      height="63"
                      rx="31.5"
                      stroke="#64748B"
                    />
                    <rect
                      x="10"
                      y="20"
                      width="44"
                      height="44"
                      rx="22"
                      fill="#64748B"
                    />
                    <path
                      d="M41.21 45.89C40.5738 47.3945 39.5788 48.7203 38.3119 49.7513C37.045 50.7824 35.5448 51.4875 33.9424 51.8048C32.3401 52.1222 30.6844 52.0422 29.1202 51.5718C27.5559 51.1015 26.1306 50.2551 24.969 49.1067C23.8074 47.9583 22.9448 46.5428 22.4566 44.984C21.9685 43.4252 21.8696 41.7705 22.1686 40.1647C22.4676 38.5588 23.1555 37.0507 24.1721 35.7721C25.1886 34.4935 26.5029 33.4834 28 32.83M41 42C41.552 42 42.005 41.551 41.95 41.002C41.7195 38.7062 40.7021 36.5607 39.0703 34.9294C37.4386 33.298 35.2929 32.2811 32.997 32.051C32.447 31.996 31.999 32.449 31.999 33.001V41.001C31.999 41.2663 32.1044 41.5206 32.2919 41.7081C32.4794 41.8957 32.7338 42.001 32.999 42.001L41 42Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                dimLogo: (
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <rect
                        x="10"
                        y="10"
                        width="44"
                        height="44"
                        rx="22"
                        fill="#64748B"
                      />
                      <path
                        d="M41.21 35.89C40.5739 37.3945 39.5788 38.7203 38.3119 39.7513C37.045 40.7824 35.5448 41.4875 33.9425 41.8048C32.3401 42.1222 30.6845 42.0422 29.1202 41.5718C27.5559 41.1015 26.1307 40.2551 24.9691 39.1067C23.8075 37.9583 22.9449 36.5428 22.4567 34.984C21.9685 33.4252 21.8696 31.7705 22.1686 30.1647C22.4677 28.5588 23.1555 27.0507 24.1721 25.7721C25.1886 24.4935 26.5029 23.4834 28 22.83M41 32C41.552 32 42.005 31.551 41.95 31.002C41.7195 28.7062 40.7021 26.5607 39.0704 24.9294C37.4386 23.298 35.2929 22.2811 32.997 22.051C32.447 21.996 31.999 22.449 31.999 23.001V31.001C31.999 31.2663 32.1044 31.5206 32.2919 31.7081C32.4795 31.8957 32.7338 32.001 32.999 32.001L41 32Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                ),
                description: "Category Spend Overview",
              },
              {
                logo: (
                  <svg
                    width="64"
                    height="74"
                    viewBox="0 0 64 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="10.5"
                      width="63"
                      height="63"
                      rx="31.5"
                      stroke="#64748B"
                    />
                    <rect
                      x="10"
                      y="20"
                      width="44"
                      height="44"
                      rx="22"
                      fill="#64748B"
                    />
                    <path
                      d="M32 32V52M37 35H29.5C28.5717 35 27.6815 35.3687 27.0251 36.0251C26.3687 36.6815 26 37.5717 26 38.5C26 39.4283 26.3687 40.3185 27.0251 40.9749C27.6815 41.6313 28.5717 42 29.5 42H34.5C35.4283 42 36.3185 42.3687 36.9749 43.0251C37.6313 43.6815 38 44.5717 38 45.5C38 46.4283 37.6313 47.3185 36.9749 47.9749C36.3185 48.6313 35.4283 49 34.5 49H26"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                dimLogo: (
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <rect
                        x="10"
                        y="10"
                        width="44"
                        height="44"
                        rx="22"
                        fill="#64748B"
                      />
                      <path
                        d="M32 22V42M37 25H29.5C28.5717 25 27.6815 25.3687 27.0251 26.0251C26.3687 26.6815 26 27.5717 26 28.5C26 29.4283 26.3687 30.3185 27.0251 30.9749C27.6815 31.6313 28.5717 32 29.5 32H34.5C35.4283 32 36.3185 32.3687 36.9749 33.0251C37.6313 33.6815 38 34.5717 38 35.5C38 36.4283 37.6313 37.3185 36.9749 37.9749C36.3185 38.6313 35.4283 39 34.5 39H26"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                ),
                description: "Detail Spend Breakdown",
              },
            ].map((d, index) => (
              <div key={index} className="flex flex-col items-start w-auto">
                <span className="flex flex-row gap-2 items-center">
                  {step <= index ? (
                    step === index ? (
                      d.logo
                    ) : (
                      d.dimLogo
                    )
                  ) : (
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="10"
                        width="44"
                        height="44"
                        rx="22"
                        fill="#16A34A"
                      />
                      <path
                        d="M40 26L29 37L24 32"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <div>
                    <p className="text-sm">{`Step ${index + 1}`}</p>
                    <p className={step === index ? "font-semibold" : ""}>
                      {d.description}
                    </p>
                  </div>
                </span>
                {index < totalSteps - 1 && (
                  <div
                    className={cn(
                      "h-14 w-0.5 transition-all duration-300 ml-8 ease-in-out",
                      index < step ? "bg-[#16a34a]" : "bg-primary/30"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <Card id="formcard" className="w-3/4 flex flex-col overflow-y-auto">
        <CardHeader></CardHeader>
        <CardContent className="flex-1">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
              {/* Step 0 - SportingClubProfile */}
              {step === 0 && (
                <>
                  <CardTitle className="text-2xl">
                    Sporting Club Details
                  </CardTitle>
                  <CardDescription>
                    Provide your club and contact information.
                  </CardDescription>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name="club_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Club Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your club name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="abn"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ABN *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter ABN" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      control={control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter country" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter state" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter city" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter address" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="postcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postcode *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter postcode" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name="club_type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Club Type *</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="w-full px-2 py-1 border rounded"
                            >
                              <option value="">Select Club Type</option>
                              <option value="Football">Football</option>
                              <option value="Rugby">Rugby</option>
                              <option value="Cricket">Cricket</option>
                              <option value="Netball">Netball</option>
                              <option value="Basketball">Basketball</option>
                              <option value="Tennis">Tennis</option>
                              <option value="Others">Others</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="num_of_players"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Players *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              placeholder="Enter number of players"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={control}
                    name="registered_association"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Registered Association *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter registered association"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="instagram_followers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instagram Followers</FormLabel>
                        <FormDescription>
                          Leave blank if not applicable.
                        </FormDescription>
                        <FormControl>
                          <Input
                            {...field}
                            type="number"
                            placeholder="Enter followers count"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="logo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Club Logo</FormLabel>
                        <FormControl>
                          <InputFile
                            value={field.value}
                            onChange={(v: any) => field.onChange(v)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <CardTitle className="text-lg">Contact Information</CardTitle>
                  <FormField
                    control={control}
                    name="contact_person_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name *</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter contact name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="contact_person_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Enter email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="contact_person_phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* Step 1 - Category Spend Overview */}
              {step === 1 && (
                <>
                  <CardTitle className="text-2xl">
                    Category Spend Overview
                  </CardTitle>
                  <CardDescription>
                    Select categories relevant to your club and add custom ones.
                  </CardDescription>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm">Categories</p>
                      <div>
                        <Button
                          type="button"
                          onClick={() => {
                            setShowAddCustomInput((v) => !v);
                          }}
                        >
                          + Add Custom Category
                        </Button>
                      </div>
                    </div>

                    {showAddCustomInput && (
                      <div className="mb-4 p-3 border rounded flex gap-2 items-center">
                        <input
                          className="px-2 py-1 border rounded flex-1"
                          value={customCategoryName}
                          onChange={(e) =>
                            setCustomCategoryName(e.target.value)
                          }
                          placeholder="Custom category name"
                        />
                        <Button
                          type="button"
                          onClick={() => addCustomCategory(customCategoryName)}
                        >
                          Add
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            setShowAddCustomInput(false);
                            setCustomCategoryName("");
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    )}

                    {isLoading && <p>Loading categories...</p>}

                    <div className="space-y-4">
                      {categories.map((cat, index) => (
                        <div
                          key={cat.local_id}
                          className="p-3 border rounded-md flex flex-col gap-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={!!cat.selected}
                                onChange={() =>
                                  toggleCategorySelected(cat.local_id)
                                }
                              />
                              {cat.is_custom ? (
                                <input
                                  className="font-medium border px-2 py-1 rounded"
                                  value={cat.name}
                                  onChange={(e) =>
                                    updateCategoryField(
                                      cat.local_id,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                  placeholder="Custom category name"
                                />
                              ) : (
                                <div className="font-medium">{cat.name}</div>
                              )}
                            </div>
                            <div className="flex gap-2 items-center">
                              <input
                                type="number"
                                placeholder="Total annual spend"
                                value={cat.total_annual_spend as any}
                                onChange={(e) =>
                                  updateCategoryField(
                                    cat.local_id,
                                    "total_annual_spend",
                                    e.target.value
                                  )
                                }
                                className="px-2 py-1 border rounded"
                              />
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {cat.is_custom
                              ? "Custom category"
                              : "Backend category"}
                          </div>
                        </div>
                      ))}

                      {categories.length === 0 && !isLoading && (
                        <div className="p-4 border rounded text-sm">
                          No categories loaded. You can add custom categories.
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Step 2 - Detailed Spend Breakdown */}
              {step === 2 && (
                <>
                  <CardTitle className="text-2xl">
                    Detailed Spend Breakdown
                  </CardTitle>
                  <CardDescription>
                    Provide detailed breakdown per selected category.
                  </CardDescription>

                  <div className="space-y-6">
                    {categories
                      .filter(
                        (c) =>
                          c.selected || (c.is_custom && c.breakdown.length > 0)
                      )
                      .map((cat, catIndex) => (
                        <div key={cat.local_id} className="border rounded p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">{cat.name}</h4>
                              <div className="text-sm text-muted-foreground">
                                {cat.is_custom ? "Custom category" : "Category"}
                              </div>
                            </div>
                            <div>
                              <Button
                                type="button"
                                onClick={() => addBreakdownItem(cat.local_id)}
                              >
                                + Add item
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-4">
                            {cat.breakdown.length === 0 && (
                              <div className="text-sm text-muted-foreground">
                                No items yet — click "Add item" to start.
                              </div>
                            )}

                            {cat.breakdown.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="grid grid-cols-5 gap-2 items-end"
                              >
                                <div className="col-span-2">
                                  <label className="text-sm">Item Name *</label>
                                  <input
                                    className="w-full px-2 py-1 border rounded"
                                    value={item.item_name}
                                    onChange={(e) =>
                                      updateBreakdownItem(
                                        cat.local_id,
                                        itemIndex,
                                        "item_name",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>

                                <div>
                                  <label className="text-sm">Unit Price</label>
                                  <input
                                    type="number"
                                    className="w-full px-2 py-1 border rounded"
                                    value={item.unit_price as any}
                                    onChange={(e) =>
                                      updateBreakdownItem(
                                        cat.local_id,
                                        itemIndex,
                                        "unit_price",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>

                                <div>
                                  <label className="text-sm">Quantity</label>
                                  <input
                                    type="number"
                                    className="w-full px-2 py-1 border rounded"
                                    value={item.quantity as any}
                                    onChange={(e) =>
                                      updateBreakdownItem(
                                        cat.local_id,
                                        itemIndex,
                                        "quantity",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>

                                <div>
                                  <label className="text-sm">Frequency *</label>
                                  <select
                                    className="w-full px-2 py-1 border rounded"
                                    value={item.frequency_of_order || ""}
                                    onChange={(e) =>
                                      updateBreakdownItem(
                                        cat.local_id,
                                        itemIndex,
                                        "frequency_of_order",
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="">Select Frequency</option>
                                    {frequencyOptions.map((f) => (
                                      <option key={f} value={f}>
                                        {f}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                  <label className="text-sm">Actions</label>
                                  <div className="flex gap-2">
                                    <Button
                                      type="button"
                                      onClick={() =>
                                        removeBreakdownItem(
                                          cat.local_id,
                                          itemIndex
                                        )
                                      }
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                </div>

                                {/* Notes row */}
                                <div className="col-span-5 mt-2">
                                  <label className="text-sm">Notes</label>
                                  <textarea
                                    rows={2}
                                    className="w-full px-2 py-1 border rounded"
                                    value={item.notes || ""}
                                    onChange={(e) =>
                                      updateBreakdownItem(
                                        cat.local_id,
                                        itemIndex,
                                        "notes",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              )}

              <div className="flex justify-between mt-4">
                <Button
                  type="button"
                  onClick={() => step > 0 && setStep(step - 1)}
                  disabled={step === 0}
                >
                  Back
                </Button>
                <Button type="submit">{step === 2 ? "Submit" : "Next"}</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

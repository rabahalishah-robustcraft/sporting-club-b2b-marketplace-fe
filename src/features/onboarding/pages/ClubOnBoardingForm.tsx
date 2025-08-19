"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./../components/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./../components/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Input } from "./../components/input";
import { Textarea } from "@/components/ui/textarea";
import { InputFile } from "../components/InputFile";

export const ClubOnBoardingForm = () => {
  const [step, setStep] = useState(0);
  const totalSteps = 3;

  const form = useForm();

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (formData: unknown) => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      console.log(formData);
      console.log("FormData: ", formData);
      setStep(0);
      reset();

      toast.success("Form successfully submitted");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const clubMultiPartStepDetail = [
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
          <rect x="10" y="10" width="44" height="44" rx="22" fill="#64748B" />
          <path
            d="M40.38 23.46L36 22C36 23.0609 35.5786 24.0783 34.8285 24.8284C34.0783 25.5786 33.0609 26 32 26C30.9392 26 29.9218 25.5786 29.1716 24.8284C28.4215 24.0783 28 23.0609 28 22L23.62 23.46C23.1674 23.6108 22.7836 23.9184 22.5379 24.3273C22.2922 24.7363 22.2007 25.2196 22.28 25.69L22.86 29.16C22.8981 29.3949 23.0187 29.6085 23.2002 29.7625C23.3816 29.9165 23.6121 30.0007 23.85 30H26V40C26 41.1 26.9 42 28 42H36C36.5305 42 37.0392 41.7893 37.4143 41.4142C37.7893 41.0391 38 40.5304 38 40V30H40.15C40.388 30.0007 40.6184 29.9165 40.7999 29.7625C40.9814 29.6085 41.102 29.3949 41.14 29.16L41.72 25.69C41.7994 25.2196 41.7079 24.7363 41.4622 24.3273C41.2165 23.9184 40.8327 23.6108 40.38 23.46Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
            <rect x="10" y="10" width="44" height="44" rx="22" fill="#64748B" />
            <path
              d="M40.38 23.46L36 22C36 23.0609 35.5786 24.0783 34.8285 24.8284C34.0783 25.5786 33.0609 26 32 26C30.9392 26 29.9218 25.5786 29.1716 24.8284C28.4215 24.0783 28 23.0609 28 22L23.62 23.46C23.1674 23.6108 22.7836 23.9184 22.5379 24.3273C22.2922 24.7363 22.2007 25.2196 22.28 25.69L22.86 29.16C22.8981 29.3949 23.0187 29.6085 23.2002 29.7625C23.3816 29.9165 23.6121 30.0007 23.85 30H26V40C26 41.1 26.9 42 28 42H36C36.5305 42 37.0392 41.7893 37.4143 41.4142C37.7893 41.0391 38 40.5304 38 40V30H40.15C40.388 30.0007 40.6184 29.9165 40.7999 29.7625C40.9814 29.6085 41.102 29.3949 41.14 29.16L41.72 25.69C41.7994 25.2196 41.7079 24.7363 41.4622 24.3273C41.2165 23.9184 40.8327 23.6108 40.38 23.46Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
          <rect x="10" y="20" width="44" height="44" rx="22" fill="#64748B" />
          <path
            d="M41.21 45.89C40.5738 47.3945 39.5788 48.7203 38.3119 49.7513C37.045 50.7824 35.5448 51.4875 33.9424 51.8048C32.3401 52.1222 30.6844 52.0422 29.1202 51.5718C27.5559 51.1015 26.1306 50.2551 24.969 49.1067C23.8074 47.9583 22.9448 46.5428 22.4566 44.984C21.9685 43.4252 21.8696 41.7705 22.1686 40.1647C22.4676 38.5588 23.1555 37.0507 24.1721 35.7721C25.1886 34.4935 26.5029 33.4834 28 32.83M41 42C41.552 42 42.005 41.551 41.95 41.002C41.7195 38.7062 40.7021 36.5607 39.0703 34.9294C37.4386 33.298 35.2929 32.2811 32.997 32.051C32.447 31.996 31.999 32.449 31.999 33.001V41.001C31.999 41.2663 32.1044 41.5206 32.2919 41.7081C32.4794 41.8957 32.7338 42.001 32.999 42.001L41 42Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
            <rect x="10" y="10" width="44" height="44" rx="22" fill="#64748B" />
            <path
              d="M41.21 35.89C40.5739 37.3945 39.5788 38.7203 38.3119 39.7513C37.045 40.7824 35.5448 41.4875 33.9425 41.8048C32.3401 42.1222 30.6845 42.0422 29.1202 41.5718C27.5559 41.1015 26.1307 40.2551 24.9691 39.1067C23.8075 37.9583 22.9449 36.5428 22.4567 34.984C21.9685 33.4252 21.8696 31.7705 22.1686 30.1647C22.4677 28.5588 23.1555 27.0507 24.1721 25.7721C25.1886 24.4935 26.5029 23.4834 28 22.83M41 32C41.552 32 42.005 31.551 41.95 31.002C41.7195 28.7062 40.7021 26.5607 39.0704 24.9294C37.4386 23.298 35.2929 22.2811 32.997 22.051C32.447 21.996 31.999 22.449 31.999 23.001V31.001C31.999 31.2663 32.1044 31.5206 32.2919 31.7081C32.4795 31.8957 32.7338 32.001 32.999 32.001L41 32Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ),
      description: "Categort Spend Overview",
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
          <rect x="10" y="20" width="44" height="44" rx="22" fill="#64748B" />
          <path
            d="M32 32V52M37 35H29.5C28.5717 35 27.6815 35.3687 27.0251 36.0251C26.3687 36.6815 26 37.5717 26 38.5C26 39.4283 26.3687 40.3185 27.0251 40.9749C27.6815 41.6313 28.5717 42 29.5 42H34.5C35.4283 42 36.3185 42.3687 36.9749 43.0251C37.6313 43.6815 38 44.5717 38 45.5C38 46.4283 37.6313 47.3185 36.9749 47.9749C36.3185 48.6313 35.4283 49 34.5 49H26"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
            <rect x="10" y="10" width="44" height="44" rx="22" fill="#64748B" />
            <path
              d="M32 22V42M37 25H29.5C28.5717 25 27.6815 25.3687 27.0251 26.0251C26.3687 26.6815 26 27.5717 26 28.5C26 29.4283 26.3687 30.3185 27.0251 30.9749C27.6815 31.6313 28.5717 32 29.5 32H34.5C35.4283 32 36.3185 32.3687 36.9749 33.0251C37.6313 33.6815 38 34.5717 38 35.5C38 36.4283 37.6313 37.3185 36.9749 37.9749C36.3185 38.6313 35.4283 39 34.5 39H26"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ),
      description: "Detail Spend Breakdown",
    },
  ];

  const completedLogo = (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="44" height="44" rx="22" fill="#16A34A" />
      <path
        d="M40 26L29 37L24 32"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className="flex flex-row m-4">
      <div
        id="sidebar"
        className="space-y-2 mx-auto w-1/4 rounded-2xl border-2 border-[#CBD5E1] sticky flex flex-col items-center"
        style={{
          background: "linear-gradient(to top right, #CBD5E1, #F8FAFC)",
          minHeight: "100vh", // full height
        }}
      >
        <img
          width="120px"
          height="120px"
          className="m-8 -ml-60"
          src="/src/assets/logo/SPORTS_CORP_LOGO.webp"
          alt={"sporting club logo"}
        />

        {/* Push formprogress to vertical center */}
        <div className="flex items-center mt-36">
          <div id="formprogress">
            {clubMultiPartStepDetail.map((stepDetail, index) => (
              <div key={index} className="flex flex-col items-start w-auto">
                <span className="flex flex-row gap-2 items-center">
                  {step <= index
                    ? step === index
                      ? stepDetail.logo
                      : stepDetail.dimLogo
                    : completedLogo}
                  <div>
                    <p className="text-sm">{`Step ${index + 1}`}</p>
                    <p className={step === index ? "font-semibold" : ""}>
                      {stepDetail.description}
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

      <Card id="formcard" className="w-3/4 flex flex-col overflow-y-auto">
        <CardHeader>
          {step === 0 && (
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#D7B96C" />
              <path
                d="M38.6654 17.1309L33.0909 15.2727C33.0909 16.6229 32.5545 17.9178 31.5998 18.8725C30.6451 19.8273 29.3502 20.3636 28 20.3636C26.6498 20.3636 25.3549 19.8273 24.4002 18.8725C23.4454 17.9178 22.9091 16.6229 22.9091 15.2727L17.3345 17.1309C16.7585 17.3228 16.27 17.7143 15.9572 18.2348C15.6445 18.7552 15.5281 19.3703 15.6291 19.9691L16.3672 24.3854C16.4157 24.6844 16.5692 24.9563 16.8002 25.1523C17.0311 25.3482 17.3244 25.4554 17.6272 25.4545H20.3636V38.1818C20.3636 39.5818 21.5091 40.7273 22.9091 40.7273H33.0909C33.766 40.7273 34.4134 40.4591 34.8908 39.9817C35.3682 39.5043 35.6363 38.8569 35.6363 38.1818V25.4545H38.3727C38.6756 25.4554 38.9688 25.3482 39.1998 25.1523C39.4307 24.9563 39.5842 24.6844 39.6327 24.3854L40.3709 19.9691C40.4718 19.3703 40.3554 18.7552 40.0427 18.2348C39.73 17.7143 39.2415 17.3228 38.6654 17.1309Z"
                stroke="white"
                stroke-width="2.54545"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
          {step === 1 && (
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#D7B96C" />
              <path
                d="M39.7218 32.951C38.9121 34.8657 37.6457 36.553 36.0333 37.8653C34.4209 39.1776 32.5115 40.0749 30.4722 40.4789C28.4329 40.8828 26.3256 40.781 24.3347 40.1823C22.3438 39.5837 20.5299 38.5065 19.0515 37.0449C17.5731 35.5833 16.4752 33.7817 15.8539 31.7978C15.2326 29.8139 15.1067 27.7079 15.4873 25.6641C15.8679 23.6203 16.7434 21.7008 18.0372 20.0735C19.3309 18.4462 21.0037 17.1606 22.9091 16.3291M39.4545 28C40.1571 28 40.7336 27.4286 40.6636 26.7299C40.3702 23.8079 39.0754 21.0773 36.9986 19.001C34.9218 16.9247 32.1909 15.6305 29.2689 15.3377C28.5689 15.2677 27.9987 15.8442 27.9987 16.5468V26.7286C27.9987 27.0661 28.1328 27.3899 28.3715 27.6285C28.6102 27.8672 28.9339 28.0013 29.2715 28.0013L39.4545 28Z"
                stroke="white"
                stroke-width="2.54545"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
          {step === 2 && (
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#D7B96C" />
              <path
                d="M28.0001 15.2727V40.7273M34.3638 19.0909H24.8183C23.6369 19.0909 22.5039 19.5602 21.6685 20.3956C20.8331 21.231 20.3638 22.364 20.3638 23.5454C20.3638 24.7269 20.8331 25.8599 21.6685 26.6953C22.5039 27.5307 23.6369 28 24.8183 28H31.182C32.3634 28 33.4964 28.4693 34.3318 29.3047C35.1672 30.1401 35.6365 31.2731 35.6365 32.4545C35.6365 33.6359 35.1672 34.769 34.3318 35.6044C33.4964 36.4398 32.3634 36.9091 31.182 36.9091H20.3638"
                stroke="white"
                stroke-width="2.54545"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </CardHeader>
        <CardContent className="flex-1">
          {step === 0 && (
            <div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <CardTitle className="text-2xl">
                    Sporting Club Details
                  </CardTitle>
                  <CardDescription>
                    Please provide your club and contact information to create
                    your account
                  </CardDescription>
                </div>
                <CardTitle className="text-lg mb-4 font-medium">
                  Club information
                </CardTitle>
              </div>

              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      key="club_name"
                      control={control}
                      name="club_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Club Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your club name"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      key="abn"
                      control={control}
                      name="abn"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ABN *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your ABN"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      key="country"
                      control={control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Select your country"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      key="city"
                      control={control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Select your city"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      key="address"
                      control={control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Club Address *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your club address"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      key="postcode"
                      control={control}
                      name="postcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postcode *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your postcode"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      key="club_type"
                      control={control}
                      name="club_type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sport *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Select a sport"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      key="num_of_players"
                      control={control}
                      name="num_of_players"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Players *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter the number of players"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    key="registered_association"
                    control={control}
                    name="registered_association"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Registered Association *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your registered association"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="instagram_followers"
                    control={control}
                    name="instagram_followers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Social Media Followers *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your Instagram followers"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="logo"
                    control={control}
                    name="logo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Club Logo</FormLabel>
                        <FormControl>
                          <InputFile
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <CardTitle className="text-lg mb-4 font-bold">
                    Contact Information
                  </CardTitle>

                  <FormField
                    key="contact_person_name"
                    control={control}
                    name="contact_person_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter contact name"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />
                  <FormField
                    key="contact_person_email"
                    control={control}
                    name="contact_person_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter contact name"
                            autoComplete="off"
                            type="email"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      className="font-medium bg-[#E5E7EB] text-black"
                      size="lg"
                      variant={"secondary"}
                      onClick={handleBack}
                      disabled={step === 0}
                    >
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6666 8H3.33325"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.99992 12.6668L3.33325 8.00016L7.99992 3.3335"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      Back
                    </Button>
                    <Button type="submit" size="lg" className="font-medium">
                      {step === 2 ? "Submit" : "Next"}
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.33325 8H12.6666"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 3.3335L12.6667 8.00016L8 12.6668"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="space-y-6">
                <div className="space-y-2 mb-4">
                  <CardTitle className="text-2xl">
                    Category Spend Overview
                  </CardTitle>
                  <CardDescription>
                    Enter your total annual spending for each supplier
                    categories that applies to your club.
                  </CardDescription>
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-y-4"
                >
                  <FormField
                    key="Bakery/Pastries"
                    control={control}
                    name="Bakery/Pastries"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bakery / Pastries</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="Butcher/FreshMeat&Eggs"
                    control={control}
                    name="Butcher/FreshMeat&Eggs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Butcher / Fresh Meat & Eggs</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="Confectionery"
                    control={control}
                    name="Confectionery"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confectionery</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="BottledWaterSupplier"
                    control={control}
                    name="BottledWaterSupplier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bottled Water Supplier</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="mC6XW3uv"
                    control={control}
                    name="mC6XW3uv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Soft Drink Supplier</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="d7JC7tzA"
                    control={control}
                    name="d7JC7tzA"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apparel (Playing Strip Supplier)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="QqTyNDoP"
                    control={control}
                    name="QqTyNDoP"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Merchandise (Supporters & Club Merchandise)
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="Jt01vChB"
                    control={control}
                    name="Jt01vChB"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sporting Equipment</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="fhNB11pU"
                    control={control}
                    name="fhNB11pU"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sports Machine</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="JTQrNxfA"
                    control={control}
                    name="JTQrNxfA"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Signage</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="AEYsc1rf"
                    control={control}
                    name="AEYsc1rf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trophies and Medals</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="6tWTG7HL"
                    control={control}
                    name="6tWTG7HL"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Printing</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="ghrq9IRP"
                    control={control}
                    name="ghrq9IRP"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sports Drink Supplier</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Annual Spend $"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      className="font-medium bg-[#E5E7EB] text-black"
                      size="lg"
                      variant={"secondary"}
                      onClick={handleBack}
                      disabled={step === 0}
                    >
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6666 8H3.33325"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.99992 12.6668L3.33325 8.00016L7.99992 3.3335"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      Back
                    </Button>
                    <Button type="submit" size="lg" className="font-medium">
                      {step === 2 ? "Submit" : "Next"}
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.33325 8H12.6666"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 3.3335L12.6667 8.00016L8 12.6668"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}

          {step === 2 && (
            <div className="h-screen">
              <div className="space-y-6">
                <div className="space-y-2  mb-4">
                  <CardTitle className="text-2xl">
                    Detailed Spend Breakdown
                  </CardTitle>
                  <CardDescription>
                    Enter your total annual spending breakdown for each supplier
                    categories that applies to your club.
                  </CardDescription>
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-y-4"
                >
                  <FormField
                    key="YirkylQK"
                    control={control}
                    name="YirkylQK"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Item Name *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Item name"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="AzPvTJAT"
                    control={control}
                    name="AzPvTJAT"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unit Price ($) *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="unit price"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="DSC6IXoL"
                    control={control}
                    name="DSC6IXoL"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Quantity"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="N6Gj0IEQ"
                    control={control}
                    name="N6Gj0IEQ"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frequency of Order *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Select frequency"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    key="t39UE1VK"
                    control={control}
                    name="t39UE1VK"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Type your notes here"
                            className="resize-none"
                            rows={5}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      className="font-medium bg-[#E5E7EB] text-black"
                      variant={"secondary"}
                      size="lg"
                      onClick={handleBack}
                      disabled={step === 0}
                    >
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6666 8H3.33325"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.99992 12.6668L3.33325 8.00016L7.99992 3.3335"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      Back
                    </Button>
                    <Button type="submit" size="lg" className="font-medium">
                      {step === 2 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

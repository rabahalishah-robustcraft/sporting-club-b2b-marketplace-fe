"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./../components/button";
import { Checkbox } from "./../components/checkbox";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
import { RadioGroup, RadioGroupItem } from "./../components/radio-group";
import { Slider } from "./../components/slider";
import { useNavigate } from "react-router-dom";

export const BusinessOnBoardingForm = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
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

      navigate("/business/dashboard");

      toast.success("Form successfully submitted");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const items = [
    {
      id: "melbourne_metro",
      label: "Melbourne Metro",
    },
    {
      id: "regional_qld",
      label: "Regional QLD",
    },
    {
      id: "perth_metro",
      label: "Perth Metro",
    },
    {
      id: "tasmania",
      label: "Tasmania",
    },
    {
      id: "regional_nsw",
      label: "Regional NSW",
    },
    {
      id: "brisbane_metro",
      label: "Brisbane Metro",
    },
    {
      id: "regional_sa",
      label: "Regional SA",
    },
    {
      id: "regional_victoria",
      label: "Regional Victoria",
    },
    {
      id: "act",
      label: "ACT",
    },
    {
      id: "regional_wa",
      label: "Regional WA",
    },
    {
      id: "sydney_metro",
      label: "Sydney Metro",
    },
    {
      id: "northern_territory",
      label: "Northern Territory",
    },
    {
      id: "adelaide_metro",
      label: "Adelaide Metro",
    },
  ] as const;

  const businessMultiPartStepDetail = [
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
            y="0.5"
            width="63"
            height="63"
            rx="31.5"
            stroke="#64748B"
          />
          <rect x="10" y="10" width="44" height="44" rx="22" fill="#64748B" />
          <path
            d="M32 32H32.01M36 26V24C36 23.4696 35.7893 22.9609 35.4142 22.5858C35.0391 22.2107 34.5304 22 34 22H30C29.4696 22 28.9609 22.2107 28.5858 22.5858C28.2107 22.9609 28 23.4696 28 24V26M42 33C39.0328 34.959 35.5555 36.0033 32 36.0033C28.4445 36.0033 24.9672 34.959 22 33M24 26H40C41.1046 26 42 26.8954 42 28V38C42 39.1046 41.1046 40 40 40H24C22.8954 40 22 39.1046 22 38V28C22 26.8954 22.8954 26 24 26Z"
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
          height="74"
          viewBox="0 0 64 74"
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
            d="M32 32H32.01M36 26V24C36 23.4696 35.7893 22.9609 35.4142 22.5858C35.0391 22.2107 34.5304 22 34 22H30C29.4696 22 28.9609 22.2107 28.5858 22.5858C28.2107 22.9609 28 23.4696 28 24V26M42 33C39.0328 34.959 35.5555 36.0033 32 36.0033C28.4445 36.0033 24.9672 34.959 22 33M24 26H40C41.1046 26 42 26.8954 42 28V38C42 39.1046 41.1046 40 40 40H24C22.8954 40 22 39.1046 22 38V28C22 26.8954 22.8954 26 24 26Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      description: "Business Information",
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
            d="M40 40C40 44.993 34.461 50.193 32.601 51.799C32.4277 51.9293 32.2168 51.9998 32 51.9998C31.7832 51.9998 31.5723 51.9293 31.399 51.799C29.539 50.193 24 44.993 24 40C24 37.8783 24.8429 35.8434 26.3431 34.3431C27.8434 32.8429 29.8783 32 32 32C34.1217 32 36.1566 32.8429 37.6569 34.3431C39.1571 35.8434 40 37.8783 40 40Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 43C33.6569 43 35 41.6569 35 40C35 38.3431 33.6569 37 32 37C30.3431 37 29 38.3431 29 40C29 41.6569 30.3431 43 32 43Z"
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
              d="M40 30C40 34.993 34.461 40.193 32.601 41.799C32.4277 41.9293 32.2168 41.9998 32 41.9998C31.7832 41.9998 31.5723 41.9293 31.399 41.799C29.539 40.193 24 34.993 24 30C24 27.8783 24.8429 25.8434 26.3431 24.3431C27.8434 22.8429 29.8783 22 32 22C34.1217 22 36.1566 22.8429 37.6569 24.3431C39.1571 25.8434 40 27.8783 40 30Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32 33C33.6569 33 35 31.6569 35 30C35 28.3431 33.6569 27 32 27C30.3431 27 29 28.3431 29 30C29 31.6569 30.3431 33 32 33Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ),
      description: "Service Areas",
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
            d="M31 47L33 49C33.197 49.197 33.4308 49.3533 33.6882 49.4599C33.9456 49.5665 34.2214 49.6213 34.5 49.6213C34.7786 49.6213 35.0544 49.5665 35.3118 49.4599C35.5692 49.3533 35.803 49.197 36 49C36.197 48.803 36.3532 48.5692 36.4598 48.3118C36.5665 48.0544 36.6213 47.7786 36.6213 47.5C36.6213 47.2214 36.5665 46.9456 36.4598 46.6882C36.3532 46.4309 36.197 46.197 36 46M34 44L36.5 46.5C36.8978 46.8978 37.4374 47.1213 38 47.1213C38.5626 47.1213 39.1022 46.8978 39.5 46.5C39.8978 46.1022 40.1213 45.5626 40.1213 45C40.1213 44.4374 39.8978 43.8978 39.5 43.5L35.62 39.62C35.0575 39.0582 34.295 38.7427 33.5 38.7427C32.705 38.7427 31.9425 39.0582 31.38 39.62L30.5 40.5C30.1022 40.8978 29.5626 41.1213 29 41.1213C28.4374 41.1213 27.8978 40.8978 27.5 40.5C27.1022 40.1022 26.8787 39.5626 26.8787 39C26.8787 38.4374 27.1022 37.8978 27.5 37.5L30.31 34.69C31.2222 33.7802 32.4119 33.2006 33.6906 33.043C34.9694 32.8854 36.2642 33.1588 37.37 33.82L37.84 34.1C38.2658 34.357 38.772 34.4461 39.26 34.35L41 34M41 33L42 44H40M23 33L22 44L28.5 50.5C28.8978 50.8978 29.4374 51.1213 30 51.1213C30.5626 51.1213 31.1022 50.8978 31.5 50.5C31.8978 50.1022 32.1213 49.5626 32.1213 49C32.1213 48.4374 31.8978 47.8978 31.5 47.5M23 34H31"
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
              d="M31 37L33 39C33.197 39.197 33.4308 39.3533 33.6882 39.4599C33.9456 39.5665 34.2214 39.6213 34.5 39.6213C34.7786 39.6213 35.0544 39.5665 35.3118 39.4599C35.5692 39.3533 35.803 39.197 36 39C36.197 38.803 36.3532 38.5692 36.4598 38.3118C36.5665 38.0544 36.6213 37.7786 36.6213 37.5C36.6213 37.2214 36.5665 36.9456 36.4598 36.6882C36.3532 36.4309 36.197 36.197 36 36M34 34L36.5 36.5C36.8978 36.8978 37.4374 37.1213 38 37.1213C38.5626 37.1213 39.1022 36.8978 39.5 36.5C39.8978 36.1022 40.1213 35.5626 40.1213 35C40.1213 34.4374 39.8978 33.8978 39.5 33.5L35.62 29.62C35.0575 29.0582 34.295 28.7427 33.5 28.7427C32.705 28.7427 31.9425 29.0582 31.38 29.62L30.5 30.5C30.1022 30.8978 29.5626 31.1213 29 31.1213C28.4374 31.1213 27.8978 30.8978 27.5 30.5C27.1022 30.1022 26.8787 29.5626 26.8787 29C26.8787 28.4374 27.1022 27.8978 27.5 27.5L30.31 24.69C31.2222 23.7802 32.4119 23.2006 33.6906 23.043C34.9694 22.8854 36.2642 23.1588 37.37 23.82L37.84 24.1C38.2658 24.357 38.772 24.4461 39.26 24.35L41 24M41 23L42 34H40M23 23L22 34L28.5 40.5C28.8978 40.8978 29.4374 41.1213 30 41.1213C30.5626 41.1213 31.1022 40.8978 31.5 40.5C31.8978 40.1022 32.1213 39.5626 32.1213 39C32.1213 38.4374 31.8978 37.8978 31.5 37.5M23 24H31"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ),
      description: "Commission Structure",
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
            {businessMultiPartStepDetail.map((stepDetail, index) => (
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
                d="M28 27.9997H28.0128M33.0909 20.3634V17.8179C33.0909 17.1428 32.8228 16.4954 32.3454 16.018C31.868 15.5406 31.2206 15.2725 30.5455 15.2725H25.4546C24.7795 15.2725 24.132 15.5406 23.6547 16.018C23.1773 16.4954 22.9091 17.1428 22.9091 17.8179V20.3634M40.7273 29.2725C36.9509 31.7657 32.5253 33.0948 28 33.0948C23.4748 33.0948 19.0492 31.7657 15.2728 29.2725M17.8182 20.3634H38.1819C39.5877 20.3634 40.7273 21.503 40.7273 22.9088V35.6361C40.7273 37.0419 39.5877 38.1816 38.1819 38.1816H17.8182C16.4124 38.1816 15.2728 37.0419 15.2728 35.6361V22.9088C15.2728 21.503 16.4124 20.3634 17.8182 20.3634Z"
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
                d="M38.1818 25.4543C38.1818 31.809 31.1322 38.4272 28.7649 40.4712C28.5444 40.637 28.2759 40.7267 28 40.7267C27.7241 40.7267 27.4556 40.637 27.2351 40.4712C24.8678 38.4272 17.8182 31.809 17.8182 25.4543C17.8182 22.7539 18.8909 20.1641 20.8004 18.2546C22.7098 16.3452 25.2996 15.2725 28 15.2725C30.7004 15.2725 33.2902 16.3452 35.1996 18.2546C37.1091 20.1641 38.1818 22.7539 38.1818 25.4543Z"
                stroke="white"
                stroke-width="2.54545"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 29.2725C30.1087 29.2725 31.8182 27.563 31.8182 25.4543C31.8182 23.3456 30.1087 21.6361 28 21.6361C25.8913 21.6361 24.1818 23.3456 24.1818 25.4543C24.1818 27.563 25.8913 29.2725 28 29.2725Z"
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
                d="M26.7273 34.3633L29.2727 36.9087C29.5234 37.1594 29.821 37.3583 30.1486 37.494C30.4762 37.6296 30.8272 37.6995 31.1818 37.6995C31.5363 37.6995 31.8874 37.6296 32.215 37.494C32.5426 37.3583 32.8402 37.1594 33.0909 36.9087C33.3416 36.658 33.5405 36.3604 33.6761 36.0328C33.8118 35.7052 33.8817 35.3542 33.8817 34.9996C33.8817 34.6451 33.8118 34.294 33.6761 33.9664C33.5405 33.6389 33.3416 33.3412 33.0909 33.0905M30.5454 30.5451L33.7273 33.7269C34.2336 34.2332 34.9203 34.5177 35.6363 34.5177C36.3524 34.5177 37.0391 34.2332 37.5454 33.7269C38.0518 33.2206 38.3362 32.5338 38.3362 31.8178C38.3362 31.1018 38.0518 30.415 37.5454 29.9087L32.6072 24.9705C31.8913 24.2555 30.9209 23.8539 29.9091 23.8539C28.8972 23.8539 27.9268 24.2555 27.2109 24.9705L26.0909 26.0905C25.5846 26.5969 24.8978 26.8813 24.1818 26.8813C23.4657 26.8813 22.779 26.5969 22.2727 26.0905C21.7664 25.5842 21.4819 24.8975 21.4819 24.1814C21.4819 23.4654 21.7664 22.7787 22.2727 22.2723L25.8491 18.696C27.0101 17.538 28.5242 16.8003 30.1517 16.5998C31.7792 16.3992 33.4271 16.7472 34.8345 17.5887L35.4327 17.9451C35.9746 18.2721 36.6189 18.3856 37.24 18.2633L39.4545 17.8178M39.4545 16.5451L40.7273 30.5451H38.1818M16.5454 16.5451L15.2727 30.5451L23.5454 38.8178C24.0518 39.3241 24.7385 39.6086 25.4545 39.6086C26.1706 39.6086 26.8573 39.3241 27.3636 38.8178C27.8699 38.3115 28.1544 37.6248 28.1544 36.9087C28.1544 36.1927 27.8699 35.5059 27.3636 34.9996M16.5454 17.8178H26.7273"
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
                    Business Information
                  </CardTitle>
                  <CardDescription>
                    Please provide your company details to create your account
                  </CardDescription>
                </div>
                <CardTitle className="text-lg mb-4 font-medium">
                  Company Info
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
                          <FormLabel>Company Name *</FormLabel>
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
                          <FormLabel>Business Address *</FormLabel>
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
                      key="categoryId"
                      control={control}
                      name="categoryId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Indusrty *</FormLabel>
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
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      key="description"
                      control={control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Describe your business and what you offer.."
                              className="resize-none"
                              rows={5}
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>

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
                      onClick={handleBack}
                      variant={"secondary"}
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
                  <CardTitle className="text-2xl">Service Area</CardTitle>
                  <CardDescription>
                    Please define your service area and delivery options.
                  </CardDescription>
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-y-4"
                >
                  <FormField
                    key="Lp8EyQpq"
                    control={control}
                    name="Lp8EyQpq"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xl mb-4">
                          What is your delivery service area?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={"statewide"}
                            className="flex flex-col"
                          >
                            <FormItem className="flex items-center gap-3">
                              <FormControl>
                                <RadioGroupItem value="local" />
                              </FormControl>
                              <FormLabel className="font-normal text-lg">
                                Local
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center gap-3">
                              <FormControl>
                                <RadioGroupItem value="statewide" />
                              </FormControl>
                              <FormLabel className="font-normal text-lg">
                                Statewide
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center gap-3">
                              <FormControl>
                                <RadioGroupItem value="national" />
                              </FormControl>
                              <FormLabel className="font-normal text-lg">
                                National
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="items"
                    render={({ field }) => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-xl">
                            Which states do you service?
                          </FormLabel>
                        </div>
                        <div className="grid grid-cols-2 w-1/2">
                          {items.map((item) => (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-center mb-4"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    const currentValues = field.value || [];
                                    return checked
                                      ? field.onChange([
                                          ...currentValues,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          currentValues.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </div>
                        <FormMessage />
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
                    Commission Structure
                  </CardTitle>
                  <CardDescription>
                    Select your desired commission rate. This will influence
                    your visibility and ranking on the marketplace
                  </CardDescription>
                </div>
              </div>
              <CardTitle className="text-lg mb-2">Commission Rate</CardTitle>

              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-y-4"
                >
                  <FormField
                    key="commission"
                    control={control}
                    name="price"
                    render={({ field: { value, onChange } }) => (
                      <FormItem>
                        <FormControl className="w-1/2">
                          <Slider
                            min={5}
                            max={95}
                            step={1}
                            defaultValue={[5]}
                            onValueChange={onChange}
                          />
                        </FormControl>
                        <div className="w-1/2 flex flex-row justify-between">
                          <FormLabel className="">{`5%`}</FormLabel>
                          <FormLabel className="">{`${
                            value ? value : "5"
                          }%`}</FormLabel>
                          <FormLabel className="">{`95%`}</FormLabel>
                        </div>
                        <FormMessage />
                        <FormDescription className="text-lg font-bold text-black">
                          This is the commission your business agrees ti give
                          TSC+ for successful deals.
                        </FormDescription>
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

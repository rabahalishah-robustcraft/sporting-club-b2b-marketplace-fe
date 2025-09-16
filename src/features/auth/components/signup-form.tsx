import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks";

type SignupFormInputs = {
  email: string;
  password: string;
  terms_and_conditions: boolean;
};

export function SignupForm({
  className,
  handleSignup,
  isPending,
  userType,
  error,
  ...props
}: React.ComponentProps<"form"> & { userType: "Supplier" | "Club" }) {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const onSubmit = (data: SignupFormInputs) => {
    // backend expects JSON { email, password, terms_and_conditions }
    handleSignup(data, {
      onSuccess: (res) => {
        console.log("Res on signup:", res);
        // redirect to login page after signup
        showToast({
          content:
            userType === "Supplier"
              ? "Business Registered Successfully!"
              : "Club Registered Successfully!",
          type: "success",
        });
        navigate(userType === "Supplier" ? "/business/login" : "/club/login");
      },
      onError: (err: any) => {
        showToast({
          content: err?.response?.data?.message || "Signup failed. Try again.",
          type: "error",
        });
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <div className="mb-2">
          <img
            src="/src/assets/logo/SPORTS_CORP_LOGO.webp"
            alt="Sport Corp Logo"
            className="h-12 w-auto"
          />
        </div>

        <h1 className="text-xl font-semibold whitespace-nowrap">
          Create Your {userType} Account
        </h1>
        <div className="text-sm">
          Already have an account?{" "}
          <a
            href={userType === "Supplier" ? "/business/login" : "/club/login"}
            className="underline underline-offset-4"
          >
            Login
          </a>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Email */}
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Password */}
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            id="terms"
            className="accent-primary"
            {...register("terms_and_conditions", {
              required: "You must agree to the terms",
            })}
          />
          <Label htmlFor="terms" className="text-sm font-normal">
            Agree to{" "}
            <a href="#" className="underline hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-primary">
              Privacy Policy
            </a>
          </Label>
        </div>
        {errors.terms_and_conditions && (
          <span className="text-sm text-red-500">
            {errors.terms_and_conditions.message}
          </span>
        )}

        {/* Submit Button */}
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Creating Account..." : "Create Account"}
        </Button>
        {error && (
          <p className="text-sm text-red-500">
            {error?.response?.data?.error
              ? error?.response?.data?.error
              : "Error while signing up. Please try again later!"}
          </p>
        )}
      </div>
    </form>
  );
}

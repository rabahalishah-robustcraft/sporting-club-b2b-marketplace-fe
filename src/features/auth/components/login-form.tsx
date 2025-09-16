import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "@/context";

import { useToast } from "@/hooks";

type LoginFormInputs = {
  email: string;
  password: string;
};

export function LoginForm({
  userType,
  className,
  handleLogin,
  isPending,
  error,
  ...props
}: React.ComponentProps<"form">) {
  const navigate = useNavigate();
  const { setAuthToken, setUserInfo, userInfo, setIsAdmin } =
    useGlobalContext();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Data: ", data);
    handleLogin(data, {
      onSuccess: (res) => {
        const { accessToken, user } = res.data;
        showToast({
          content: "Login Success",
          type: "success",
        });

        if (user?.user_type === "ADMIN") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }

        console.log("AccessToken: ", accessToken);
        console.log("User: ", user);

        setAuthToken(accessToken);
        setUserInfo(user);

        // redirect based on userType
        if (user?.is_profile_completed) {
          navigate(
            userType === "club"
              ? `/club/${userInfo?.id}/dashboard`
              : `/business/${userInfo?.id}/dashboard`
          );
        } else {
          navigate(
            userType === "club"
              ? `/club/${userInfo?.id}/onboarding`
              : `/business/${userInfo?.id}/onboarding`
          );
        }
      },
      onError() {
        showToast({
          content: "Login Failed",
          type: "error",
        });
        clearStorage();
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

        <h1 className="text-xl font-semibold">Login</h1>
        <div className="text-sm">
          Don&apos;t have an account?{" "}
          <a
            href={userType === "club" ? "/club/signup" : "/business/signup"}
            className="underline underline-offset-4"
          >
            Sign up
          </a>
        </div>
      </div>

      <div className="grid gap-6">
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
          <a href="#" className="text-sm underline-offset-4 hover:underline">
            Forgot your password?
          </a>
        </div>

        <Button type="submit" className="w-full">
          {isPending ? "Loggin in..." : "Login"}
        </Button>

        {error && (
          <p className="text-sm text-red-500">
            {error?.response?.data?.error
              ? error?.response?.data?.error
              : "Error while loging. Please try again later!"}
          </p>
        )}
      </div>
    </form>
  );
}

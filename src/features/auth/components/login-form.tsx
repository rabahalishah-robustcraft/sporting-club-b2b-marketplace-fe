import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export function LoginForm({
  userType,
  className,
  ...props
}: React.ComponentProps<"form">) {
  const navigate = useNavigate();

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2">
        <div className=" mb-2">
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
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
          <a href="#" className="text-sm underline-offset-4 hover:underline">
            Forgot your password?
          </a>
        </div>
        <Button
          onClick={() =>
            navigate(
              userType === "club" ? "/club/dashboard" : "/business/dashboard"
            )
          }
          type="submit"
          className="w-full"
        >
          Login
        </Button>
      </div>
    </form>
  );
}

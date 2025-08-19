import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupForm({
  className,
  userType,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
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
          <a href="#" className="underline underline-offset-4">
            Login
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
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              id="terms"
              required
              className="accent-primary"
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
        </div>
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </div>
    </form>
  );
}

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <img
                src="/src/assets/logo/SPORTS_CORP_LOGO.webp"
                alt="Sport Corp Logo"
                className="h-12 w-auto mb-4"
              />
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome Back!</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button
              onClick={() => navigate("/admin/dashboard")}
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="fixed bottom-10 left-0 w-full bg-background py-2 text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 z-50">
        © 2025 TSC Connect. All rights reserved.
      </div>
    </div>
  );
}

import { SignupForm } from "../components/signup-form";

export default function SignupPageBusiness() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-secondary">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm userType="Supplier" />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <div className="absolute inset-0 h-full w-full">
          <img
            src="/src/assets/loginPage/BUSINESS_LOGIN_PAGE_BG.webp"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
          <img
            src="/src/assets/misc/OVERLAY.png" // Replace with your actual overlay PNG path
            alt="Overlay"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            style={{ zIndex: 1 }}
          />
        </div>
        <div className="absolute inset-0 flex items-end  pb-10 pl-10 z-10">
          <div className="flex flex-col w-full">
            <h1 className="text-3xl text-white font-inter mb-2">
              Connect your club to local businesses. Save money. Grow together
            </h1>
            <p className="text-base text-white font-inter z-10">
              © 2025, TSC+.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

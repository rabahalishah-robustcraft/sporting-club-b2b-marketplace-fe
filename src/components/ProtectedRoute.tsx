import LoginPageClub from "@/features/auth/pages/LoginPageClub";
import { useAuth } from "@/hooks/useAuth";

export const ProtectedRoute = ({ children, isAdminRoute }) => {
  const { authToken, isAdmin } = useAuth();

  if (!authToken || (isAdminRoute && !isAdmin)) {
    return <LoginPageClub />;
  }

  return children;
};

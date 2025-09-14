import { useAuth } from "@/hooks/useAuth";

export const ProtectedRoute = ({ children, isAdminRoute }) => {
  const { authToken, isAdmin } = useAuth();

  // if (!isAuthenticated || (isAdminRoute && !isAdmin)) {
  if (false) {
    // Redirect to the appropriate login page based on role or to landing page
    return (
      <div className="p-8 text-center">
        You must be logged in to view this page.
      </div>
    );
  }

  return children;
};

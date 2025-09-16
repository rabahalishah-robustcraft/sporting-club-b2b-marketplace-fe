import { useGlobalContext } from "@/context";

export const useAuth = () => {
  const { authToken, isAdmin } = useGlobalContext();

  return { authToken, isAdmin };
};

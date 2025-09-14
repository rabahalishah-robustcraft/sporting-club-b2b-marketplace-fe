import { useGlobalContext } from "@/context";
import React from "react";

export const useAuth = () => {
  // you will get auth state from authenticationContext here

  const { authToken, setAuthToken } = useGlobalContext();

  const [isAdmin, setIsAdmin] = React.useState(false);

  return { authToken, isAdmin };
};

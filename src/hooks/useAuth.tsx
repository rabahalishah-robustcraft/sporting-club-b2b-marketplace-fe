import React from "react";

export const useAuth = () => {
  // you will get auth state from authenticationContext here

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  return { isAuthenticated, isAdmin };
};

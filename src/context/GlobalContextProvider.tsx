import React, { createContext, useContext, ReactNode } from "react";
import useSecureLocalStorage from "secure-local-storage-hook";
import { AUTH_TOKEN_STORAGE_KEY, USER_DATA_STORAGE_KEY } from "../constants";

export type AuthToken = string | null;

export type SelectedServer = { id: number; value: string; label: string };

export type GlobalContextType = {
  authToken: AuthToken;
  setAuthToken?: (authToken: string) => void;
  userInfo: any;
  setUserInfo?: (userInfo: any) => void;
  clearStorage?: () => void;
};

// Create a context with a default value of undefined
const GlobalContext = createContext<GlobalContextType>({
  authToken: null,
  userInfo: null,
});

// Create a provider component
export const GlobalContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [authToken, setAuthToken] = useSecureLocalStorage<AuthToken>(
    AUTH_TOKEN_STORAGE_KEY,
    null
  );

  const [userInfo, setUserInfo] = useSecureLocalStorage<any>(
    USER_DATA_STORAGE_KEY,
    null
  );

  const clearStorage = () => {
    window.localStorage.clear();
  };

  return (
    <GlobalContext.Provider
      value={{
        authToken,
        setAuthToken,
        userInfo,
        setUserInfo,
        clearStorage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the context
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

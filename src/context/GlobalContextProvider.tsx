import React, { createContext, useContext, ReactNode } from "react";
import useSecureLocalStorage from "secure-local-storage-hook";
import {
  AUTH_TOKEN_STORAGE_KEY,
  IS_ADMIN_STORAGE_KEY,
  USER_DATA_STORAGE_KEY,
} from "../constants";

export type AuthToken = string | null;
export type IsAdmin = boolean;

export type UserInfo = {
  id: string;
  email: string;
  user_type: string;
  is_profile_completed: boolean;
} | null;

export type GlobalContextType = {
  authToken: AuthToken;
  setAuthToken?: (authToken: string) => void;
  userInfo: UserInfo;
  setUserInfo?: (userInfo: UserInfo) => void;
  isAdmin: boolean;
  setIsAdmin?: (isAdmin: boolean) => void;
  clearStorage?: () => void;
};

// Create a context with a default value of undefined
const GlobalContext = createContext<GlobalContextType>({
  authToken: null,
  userInfo: null,
  isAdmin: false,
});

// Create a provider component
export const GlobalContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [authToken, setAuthToken] = useSecureLocalStorage<AuthToken>(
    AUTH_TOKEN_STORAGE_KEY,
    null
  );

  const [userInfo, setUserInfo] = useSecureLocalStorage<UserInfo>(
    USER_DATA_STORAGE_KEY,
    null
  );

  const [isAdmin, setIsAdmin] = useSecureLocalStorage<IsAdmin>(
    IS_ADMIN_STORAGE_KEY,
    false
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
        isAdmin,
        setIsAdmin,
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

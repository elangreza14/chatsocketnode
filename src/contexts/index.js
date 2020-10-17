import { createContext, useContext } from "react";

export const ContactsContext = createContext();
export const AuthContext = createContext();

export const useContacs = () => {
  return useContext(ContactsContext);
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export * from "./AuthProvider";
export * from "./ContactsProvider";

import { createContext, useContext } from "react";

export const ContactsContext = createContext();

export const useContacs = () => {
  return useContext(ContactsContext);
};

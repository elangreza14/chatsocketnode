import React, { useEffect, useReducer } from "react";
import { ContactsContext } from ".";
import { useLocalStrorage } from "../hooks";
import { ContactReducer } from "../reducers";

export const ContactsProvider = ({ children }) => {
  const [contactList, dispatchConctact] = useReducer(ContactReducer, []);

  // const [contacs, setContacs] = useLocalStrorage("contacs", contactList);

  // useEffect(() => {
  //   setContacs(contactList);
  // }, [contactList]);

  return (
    <ContactsContext.Provider value={{ contactList, dispatchConctact }}>
      {children}
    </ContactsContext.Provider>
  );
};

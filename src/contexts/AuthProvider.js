import React, { useReducer } from "react";
import { AuthContext } from ".";
import { AuthReducer } from "../reducers";

export const AuthProvider = (props) => {
  const initialState = {
    isLoggedIn: false,
    userId: "",
    token: "",
    timeout: "",
    username: "",
  };

  const [auth, dispatch_auth] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ auth, dispatch_auth }}>
      {props.children}
    </AuthContext.Provider>
  );
};



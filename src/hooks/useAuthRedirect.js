import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../contexts";

export const useAuthRedirect = (data) => {
  const [loading, setLoading] = useState(true);
  const { dispatch_auth } = useAuth();

  const store = useCallback(() => {
    localStorage.setItem("UserData", JSON.stringify(data));
  }, [data]);

  const get = useCallback(() => {
    var cat = localStorage.getItem("UserData");
    console.log(cat);
    const parse = JSON.parse(cat);
    dispatch_auth({
      type: "RESTORE_USER",
      isLoggedIn: parse.isLoggedIn,
      userId: parse.userId,
      timeout: parse.timeout,
      username: parse.username,
    });
  }, [dispatch_auth]);

  const logout = useCallback(() => {
    dispatch_auth({ type: "SIGN_OUT" });
  }, [dispatch_auth]);

  useEffect(() => {
    var cat = localStorage.getItem("UserData");
    if (cat) {
      get();
      setLoading(false);
    }
  }, [get]);

  useEffect(() => {
    store();
  }, [data, store]);

  return {
    loading,
    login:
      data.isLoggedIn &&
      data.token !== null &&
      data.userId !== null &&
      data.timeout !== null,
    logout,
  };
};

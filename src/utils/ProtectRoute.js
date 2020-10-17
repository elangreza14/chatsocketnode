import { useEffect, useRef } from "react";
import { useAuth } from "../contexts";
import { useAuthRedirect } from "../hooks";
import { useRouter } from "next/router";

export const ProtectRoute = ({ children }) => {
  const prevRoute = useRef();
  const router = useRouter();
  const { auth } = useAuth();
  const { loading, login } = useAuthRedirect(auth);
  // console.log(router, login);

  useEffect(() => {
    console.log(prevRoute.current)
    if (loading === false) {
      if (login === false) {
        prevRoute.current = router.pathname;
        router.push("/login");
      } else if (prevRoute.current !== "/login") {
        router.push(prevRoute.current);
      } else {
        router.push("/");
      }
    }
    console.log("isi sekarang", prevRoute);
  }, [login, loading, auth]);

  return children;
};

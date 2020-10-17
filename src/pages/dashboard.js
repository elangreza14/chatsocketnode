import { Button } from "react-bootstrap";
import { useAuth } from "../contexts";
import { useAuthRedirect } from "../hooks";

const dashboard = () => {
  const { auth } = useAuth();
  const { logout } = useAuthRedirect(auth);
  console.log(logout)
  return (
    <>
      <Button onClick={() => logout()}>Log Out</Button>
      <div>dashboard</div>
    </>
  );
};

export default dashboard;

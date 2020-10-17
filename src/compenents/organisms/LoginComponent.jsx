import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";
import { useAuth } from "../../contexts";

const LoginComponent = () => {
  const idRef = useRef();
  const { dispatch_auth } = useAuth();
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("tesr")
    dispatch_auth({
      type: "SIGN_IN",
      userId: idRef.current.value,
      timeout: new Date(),
      username: nameRef.current.value,
    });
    // onIdSubmit({ id: idRef.current.value, name: nameRef.current.value });
  }

  return (
    <Container
      className="d-flex align-items-center justif-content-center"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type="text" ref={nameRef}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef}></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        {/* <Button onClick={createNewID} variant="secondary">
          Create a New ID
        </Button> */}
      </Form>
    </Container>
  );
};

export default LoginComponent;

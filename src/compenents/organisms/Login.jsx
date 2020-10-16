import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("test");
    onIdSubmit({ id: idRef.current.value, name: nameRef.current.value });
  }
  function createNewID() {
    onIdSubmit(uuidV4());
  }
  return (
    <Container
      className="align-items-center d-flex"
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
        <Button onClick={createNewID} variant="secondary">
          Create a New ID
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

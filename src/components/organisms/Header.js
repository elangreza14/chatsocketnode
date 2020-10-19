import React from 'react'
import { Nav, Button, Navbar } from 'react-bootstrap'

const Header = props => {
  const { logout } = props
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
        </Nav>
        <Button
          variant="outline-success"
          type="button"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

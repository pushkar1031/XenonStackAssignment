import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Orion School</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={"/"}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/contact-us"}>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/about-us"}>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/registation"}>
                <Nav.Link>Registation</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/login"}>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/ourProducts"}>
                <Nav.Link>Our Courses</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="bg-transparent">
        <Container fluid className="mx-4">
          <Navbar.Brand className="text-danger fw-bold fs-2 " href="#home">
            Hackflix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/contact" className="text-decoration-none">
                <Nav.Link className="text-danger fs-5 " href="#home">
                  Contact
                </Nav.Link>
              </Link>
              <Link to="/about-us" className="text-decoration-none">
                <Nav.Link className="text-danger fs-5 " href="#home">
                  About Us
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

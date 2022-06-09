import {Container, Nav, Navbar} from "react-bootstrap";

import logo from '../../images/logo.png'

function Header() {


  return (
      <div>
        <Navbar bg="black" expand="lg" fixed="top">
          <Container className="py-3  px-5" fluid>
            <Navbar.Brand href="#">
              <img
                  src={logo}
                  alt=""
                  className="w-50"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
              ></Nav>
              <Nav className="d-flex " style={{ fontSize: "20px" }}>
                <Nav.Link href="#main"  className="py-1 px-3 text-white">
                  Asosiy
                </Nav.Link>

                <Nav.Link href="#news" className="py-1 px-3 text-white">
                  Yangiliklar
                </Nav.Link>
                <Nav.Link href="#books" className="py-1 px-3 text-white">
                  Kitoblar
                </Nav.Link>
                <Nav.Link href="#picture" className="py-1 px-3 text-white">
                  Rasmlar
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
}

export default Header;
import {Container, Nav, Navbar} from "react-bootstrap";

import logo from '../../images/logo.png'

function Header() {


  return (
      <div>
        <Navbar expand="lg" fixed="top" className='text-white bg-dark'>
          <Container className="py-3  px-5" fluid>
            <Navbar.Brand href="#" className='w-50'>
              <img
                  src={logo}
                  alt=""
                  className="w-25 mx-sm-0 mx-1 mx-md-2 mx-lg-3"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                  activeClassName="navbar-brand-active"
                  className="me-auto my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
              ></Nav>
              <Nav className="d-flex " style={{ fontSize: "20px" }}>
                <Nav.Link href="#main"  className="py-1 px-3 text-white">
                  Asosiy
                </Nav.Link>

                <Nav.Link href="#news" className="py-1 px-3 text-white">
                  Maqolalar
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
import React from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function MainNavbar() {
  const { activeUser, onLogout, onModalShow } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">HikeMe2</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            //   style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} eventKey="1" to="/">
              {/* <FaHome /> */}
              &nbsp;Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              eventKey="2"
              to="/form"
              // onClick={OnNavigateSearch}
            >
              {/* <ImSearch /> */}
              &nbsp;Find new trip
            </Nav.Link>
            {activeUser && (
              <Nav.Link as={NavLink} eventKey="3" to="/profile">
                {/* <BsPersonCircle /> */}
                &nbsp; My Profile
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {activeUser ? (
              <Nav.Link as={NavLink} eventKey="8" to="/" onClick={onLogout}>
                Log out &nbsp;
                {/* <MdLogout /> */}
              </Nav.Link>
            ) : (
              <Nav.Link
                as={NavLink}
                eventKey="9"
                to="/login"
                onClick={onModalShow}
              >
                Login &nbsp;
                {/* <GoSignIn /> */}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;

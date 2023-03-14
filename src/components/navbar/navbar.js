import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

function NavbarCust() {

  const { logout } = useAuth0();
  const { isAuthenticated} = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
            <div>
                WeatherApp 
            </div>
            <p className="subhead">- auth0 X openWeather -</p>
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          {isAuthenticated &&
          <Nav>
            <Nav.Link href="#deets" onClick={() => logout({ logoutParams: { returnTo: 'http://localhost:3000/' } })}>Log Out</Nav.Link>
          </Nav>
          }     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCust;
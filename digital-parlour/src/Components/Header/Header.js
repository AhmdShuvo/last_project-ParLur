import React from 'react';
import { Button,Navbar,Container,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="info text-white" expand="lg">
  <Container fluid>
    <Navbar.Brand className="text-light" href="#">Digital Parlour</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink className="navbar-brand text-white border border-secondary p-2 rounded-3" to="/home">Home</NavLink>
        <NavLink className="navbar-brand text-white border border-secondary p-2 rounded-3" to="/services">Services</NavLink>
        <NavLink className="navbar-brand text-white border border-secondary p-2 rounded-3" to="login">Login</NavLink>
      </Nav>
     
    </Navbar.Collapse>
    
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
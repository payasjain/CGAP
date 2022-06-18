import React from 'react'
import logo from "../images/logo.jpg"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Explore from './Explore'

function NavScrollExample() {
  return (
    <Navbar className="navbar">
      <Container fluid>
      <img src={logo} className="logo"/>
        <Navbar.Brand href="/" className="logo-title">WOMEN FOR POLITICS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // className="d-flex"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex nav-items">
          <Nav.Link href="/" className="me-2">Home</Nav.Link>
          <Nav.Link href="/explore" className="me-2">Explore</Nav.Link>
            <Nav.Link href="https://www.womenforpolitics.com/contribute" className="me-2">
              Contribute
            </Nav.Link>
            <Nav.Link href="https://www.womenforpolitics.com/contact" className="me-2">Contact Us</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
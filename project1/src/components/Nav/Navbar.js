import React from "react";
import {Navbar , Container , Nav} from 'react-bootstrap';
import './Nav.css';
import logo from '../../Assets/download.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone , faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


  function Navbars() {
    return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} title="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Navbar bg="white" variant="white">
        <Container>
          <Link to="/home">Home</Link>
          <Nav className="me-auto">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to ="/doctors">our Doctor</Link>
          </Nav>
        </Container>
      </Navbar>
              <Link to="/contact">Contact us</Link>
              <Nav.Link><FontAwesomeIcon icon={faSearch} /></Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon icon={faPhone} className="phone" />
                (+01)999 888 777</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }

export default Navbars;

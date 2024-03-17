import React, { useEffect, useState } from "react";
import "bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navImg from './Group 21.png';
import "./navCss.css";

const NavbarComponent = () => {
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const onScroll=()=>{
      if(window.scrollY>520){
          setScrolled(true);
      }else{
          setScrolled(false);
      }
  }
  window.addEventListener("scroll",onScroll);
  return ()=> window.removeEventListener("scroll",onScroll);
  },[])
  return (
    <>
      <Navbar bg="dark" data-bs-theme="light" className="navBarDes" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img src={navImg} alt="Hello" className="navImg"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="home">
              <div className="homeButton">
                Home
              </div>
            </Nav.Link>
            <Nav.Link href="#report">
              <div className="reportButton">
              Report
              </div>
              </Nav.Link>
            <Nav.Link href="#help">
              <div className="helpButton">
              Get Help
              </div>
              </Nav.Link>
            <Nav.Link href="#contact">
              <div className="contactButton">
              Contact Us
              </div>
              </Nav.Link>
            <Nav.Link href="login">
              <div className="loginButton">
              Log In
              </div>
              </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

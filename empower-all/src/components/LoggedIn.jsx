import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Row, Col, Container } from "react-bootstrap";
import footer from "../assets/1st.png";
import Navbar from './LoggedNavBar'
import bannerImg from '../assets/loggedinBanner.png'
import "./loggedIn.css"
import Content from "./Content"
import GetHelp from "./GetHelp"

const LoggedIn = () => {
  return (
    <>
      <Navbar/>
      <div className="banner">
        <div className="Banner-container">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <div className="banner-text">
                  <h1>Welcome to Empower All</h1>
                  <p className="banner-detail">
                    Together, We Can Make a Difference
                  </p>
                  <div style={{display: "flex"}}>
                  <button type="button" className="bannerHelp">
                    Help Someone
                  </button>
                  {/* <button type="button" className="bannerLogin">Login</button> */}
                  
                </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <img src={bannerImg} className="bannerImg" />
              </Col>
            </Row>
          </Container>
        </div>
        <img src={footer} className="footerBanner" />
        {/* <div className="animation-background"></div> */}
      </div>
        <Content/>
        <GetHelp/>
    </>
  )
}

export default LoggedIn

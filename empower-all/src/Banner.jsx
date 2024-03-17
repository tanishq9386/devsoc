import React from "react";
import "./banner.css";
import Button from "react-bootstrap/Button";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import {Row,Col,Container} from 'react-bootstrap';
import footer from './1st.png';
import bannerImg from './banner-img.png';

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="Banner-container">
          <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
            <div  className="banner-text">
            <h1>Welcome to Empower All</h1>
            <p className="banner-detail">
                Together, We Can Make a Difference
            </p>
            <button type="button" className="bannerHelp">Help Someone</button>
            <button type="button" className="bannerLogin">Login</button>
            </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <img src={bannerImg} className="bannerImg"/>
            </Col>
          </Row>
          </Container>
        </div>
        <img src={footer} className="footer"/>
      </div>
    </div>
  );
};

export default Banner;

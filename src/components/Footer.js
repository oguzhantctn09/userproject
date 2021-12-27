import React from "react";
import {Row, Col, Container} from 'react-bootstrap';

function Footer() {
  return (
    <div className="bg-secondary p-5 ">
    <Row className="ml-5"> 
    <Col xs={5}> 
      <a href="https://www.primeit.com.tr/tr/" rel="noreferrer" target="_blank">
      <img
          alt=""
          src= '/images/logo2.svg'
          width="200"
          height="70"
          className="d-inline-block align-top"
      />
      </a>
      </Col>
    </Row>
      

    <Row className=" mt-5">
      <Col className="text-left" md={{ span: 3, offset: 2}} >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor i
      ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Col>
    </Row>
    <Container fluid>
      <Row >
        <Col className="text-center"> 
        🄯 2022 Copyright...
        </Col>
      </Row>
    </Container>
        
    </div>
  );
};
export default Footer;
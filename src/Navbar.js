import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const NavbarTop = () => {
  return (
    <Row>
      <Navbar bg="light" variant="blue" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-justified w-100">
        <Col sm={2}><Nav.Link href="#home" className="nav_option">HOME</Nav.Link></Col>
        <Col sm={2}><Nav.Link href="#services" className="nav_option">SERVICES</Nav.Link></Col>
        <Col sm={4}> <Nav.Link style={{fontSize:'30px', fontWeight:'bolder', textAlign:'center'}}>MATHEW KADESH<br/>
<div className="rectangle">
<span style={{color:'black', fontSize:'15px'}}>FULLSTACK DEVELOPER</span>
</div>  </Nav.Link></Col>

<Col sm={2}> <Nav.Link href="#works" className="nav_option">WORKS</Nav.Link></Col>
<Col sm={2}> <Nav.Link href="#contact" className="nav_option">CONTACT</Nav.Link></Col>
        </Nav>
       
      </Navbar.Collapse>
  </Navbar>
    </Row>
);
};

export default NavbarTop;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faMapMarkerAlt, faBook} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faSquareGithub, faLinkedin, faInstagramSquare} from "@fortawesome/free-brands-svg-icons"; // Correctly import brand icons
import {faUser, faFileAlt, faTools, faProjectDiagram, faHome} from '@fortawesome/free-solid-svg-icons';
import Intro from "./Intro";
import About from "./About";
import Projects1 from "./Service1";
import Skills from "./Skills";
import pic1 from "./res/myself/pic4.png";
import Contact from "./Contact";
import Resume from "./Resume";
import Cv from "./CV/MathewKadesh.pdf";

function ProfileCard() {
  
  const [activeComponent, setActiveComponent] = useState("");
  const [cardBgColor, setCardBgColor] = useState("#f8f9fa"); // Default card background color
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call immediately to set initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 2 },
    },
  };

  const renderBackgroundText = () => {
    const styles = {
      position: 'absolute',
      top: '10%',
      left: '45%',
      transform: 'translate(-50%, -50%)',
      fontSize: '50px', // Use viewport width for large, scalable text size
      fontWeight: '700',
      // Use gold color for the text
      color: '#f68080',
      /* Add text shadow for a subtle gold outline effect */
      textShadow: '0 0 2px rgba(255, 215, 0, 0.5)',
      userSelect: 'none',
      pointerEvents: 'none',
      zIndex: '-1',
      overflow: 'hidden',
      whiteSpace: 'nowrap', // Keep text in one line to avoid line breaks
      lineHeight: '1',
  };

    return (
      <div style={styles}>
        {activeComponent}
      </div>
    );
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <About />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects1 />;
      case "Resume":
        return <Resume/>;
      case "Contact":
        return <Contact/>;
      default:
        return <Intro />;
    }
  };

  
  const buttonVariant = {
    hover: {
      scale: 1.1, // No scaling effect
      rotate: [0, 10, -10, 10, -10, 0], // Rotate back and forth (shake)
      transition: {
        duration: 0.3,
        yoyo: Infinity // Apply the animation forever
      }
    }
  };

  const buttonName=[
    {btnIcon:faHome},
    {btnIcon:faUser ,btnName:'About'},
    {btnIcon:faFileAlt ,btnName:'Resume'},
    {btnIcon:faTools ,btnName:'Skills'},
    {btnIcon:faProjectDiagram ,btnName:'Projects'},
    {btnIcon:faEnvelope ,btnName:'Contact'},
  ]




  const socialMedia = [
    { icon: faFacebookSquare, link: 'https://www.facebook.com/mathewkadesh98', color:'#0080ff' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/mathew-kadesh-141b37188', color:'#00578a' },
    { icon: faSquareGithub, link: 'https://github.com/mathewkadesh', color:'black' },
    { icon: faInstagramSquare, link: 'https://www.instagram.com/ka_de_sh01?igsh=Y2hvbWQxYzNocDV4&utm_source=qr', color:'#a52a2a' },
  ];

  // const jiggleVariants = {
  //   hover: {
  //     scale: 1.1,
  //     x: [0, -2, 2, -2, 2, 0], // Jiggle effect on the x-axis
  //     transition: {
  //       scale: {
  //         type: 'spring',
  //         stiffness: 300,
  //       },
  //       x: {
  //         duration: 0.6,
  //         yoyo: Infinity, // Repeat the animation forever
  //       }
  //     }
  //   }
  // };

  

  return (
    <Container fluid style={{ position: 'relative'}}>
       {/* {renderBackgroundText()} */}
      
      <Row>

    <Container className="mobile-button-container d-lg-none"> {/* 'd-lg-none' hides this div on larger screens */}
      <Intro/>
      <About/>
      <Skills/>
      <Projects1/>
      <Resume/>
      <Contact/>
    </Container>

        <Col className="d-none d-lg-block page-content-wrapper">
          <motion.div
            className="scrollable-content"
            initial="hidden"
            animate="visible"
            variants={contentVariants}>
            {renderComponent()}
          </motion.div>
        </Col>
        
        <Col md={1} id="d-none d-lg-block sidebar-wrapper">
          <div
            className=" d-flex justify-content-center align-items-center">
            <Card
            className="profileCard"
              style={{
                borderRadius: '50% / 10%',  // Applies a 50% radius horizontally and 10% vertically
                width: "100%",
                backgroundColor: "#ff6362",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                border: "none",
                marginTop: "40%",
                padding: '45px 2px',
                color: 'white'}} >
  
             
              <Card.Body className="d-none d-lg-block text-center">
                
         {buttonName.map((btn) => (
          <motion.button
            whileHover="hover"
            variants={buttonVariant}
            onClick={() => setActiveComponent(btn.btnName)}
            className="btn btn-light selectionBtn mx-auto d-block">
            <FontAwesomeIcon icon={btn.btnIcon} color='#ff6362'/>
          </motion.button>
        ))}
    
</Card.Body>
</Card>
</div>
</Col>
      </Row>
    </Container>
  );
}

export default ProfileCard;

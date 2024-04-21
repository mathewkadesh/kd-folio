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
  
  const [activeComponent, setActiveComponent] = useState("MK");
  const [cardBgColor, setCardBgColor] = useState("#f8f9fa"); // Default card background color


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
      top: '30%',
      left: '60%',
      transform: 'translate(-50%, -50%)',
      fontSize: '28vw', // Use viewport width for large, scalable text size
      fontWeight: '700',
      // Use gold color for the text
      color: '#fff7ce',
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
      case "Projects1":
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
      scale: 1.1, // Scale up
      rotate: [0, 10, -10, 10, -10, 0], // Rotate back and forth (shake)
      transition: {
        duration: 0.3,
        yoyo: Infinity // Apply the animation forever
      }
    }
  };

  const buttonName=[
    {btnIcon:faHome ,btnName:'MK'},
    {btnIcon:faUser ,btnName:'About'},
    {btnIcon:faFileAlt ,btnName:'Resume'},
    {btnIcon:faTools ,btnName:'Skills'},
    {btnIcon:faProjectDiagram ,btnName:'Projects1'},
    {btnIcon:faEnvelope ,btnName:'Contact'},
  ]

  const designations = ['Web Developer', 'UI/UX Designer', 'Full Stack Developer'];
  const [currentDesignation, setCurrentDesignation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesignation((currentDesignation) => 
        (currentDesignation + 1) % designations.length
      );
    }, 3000); // Change every 3000ms (3 seconds)

    return () => clearInterval(interval);
  }, []);


  const socialMedia = [
    { icon: faFacebookSquare, link: 'https://www.facebook.com/mathewkadesh98', color:'#0080ff' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/mathew-kadesh-141b37188', color:'gold' },
    { icon: faSquareGithub, link: 'https://www.linkedin.com/in/mathew-kadesh-141b37188', color:'black' },
    { icon: faInstagramSquare, link: 'https://www.instagram.com/ka_de_sh01?igsh=Y2hvbWQxYzNocDV4&utm_source=qr', color:'#a52a2a' },
  ];

  const jiggleVariants = {
    hover: {
      scale: 1.1,
      x: [0, -2, 2, -2, 2, 0], // Jiggle effect on the x-axis
      transition: {
        scale: {
          type: 'spring',
          stiffness: 300,
        },
        x: {
          duration: 0.6,
          yoyo: Infinity, // Repeat the animation forever
        }
      }
    }
  };

  return (
    <Container fluid style={{ position: 'relative'}}>
       {renderBackgroundText()}
       {/* Mobile Button Container */}
    <div className="mobile-button-container d-lg-none"> {/* 'd-lg-none' hides this div on larger screens */}
      {buttonName.map((btn) => (
        <motion.button
          whileHover="hover"
          variants={buttonVariant}
          onClick={() => setActiveComponent(btn.btnName)}
          className="btn btn-light selectionBtn"
        >
          <FontAwesomeIcon icon={btn.btnIcon} />
        </motion.button>
      ))}
    </div>
      <Row>
        <Col md={3} id="sidebar-wrapper">
          <div
            className="d-flex justify-content-center align-items-center"
            
          >
            <Card
            className="profileCard"
              style={{
                borderRadius: '5% 45% 5% 5%',
                width: "100%",
                backgroundColor: "#f8f9fa",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                border: "none",
                marginTop:"15px"
              }}
            >
              <Card.Header
                className="bg-white border-0 d-flex justify-content-center align-items-center"
                style={{ borderRadius: "5% 45% 5% 5%"}}
              >
               
      <div className="image-container">
                <Card.Img
                className="profile-image"
                  variant="top"
                  src={pic1}
                  style={{
                    width: "100%",
                  }}
                />
                </div>
              
              </Card.Header>
              <Card.Body className="text-center">
                <Card.Title style={{fontSize:'30px'}}>MATHEW KADESH</Card.Title>
                <Card.Subtitle className="mb-2">
                <motion.div
          key={designations[currentDesignation]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h5>{designations[currentDesignation]}</h5>
        </motion.div>
                </Card.Subtitle>

         <motion.div
      variants={jiggleVariants}
      whileHover="hover"
      style={{
        display: 'inline-block', // Wrap the button for proper scaling
        cursor: 'pointer',
      }}
    >
      <Button
        style={{
          margin: "20px",
          padding: "10px",
          backgroundColor: "#ff9700",
          border: "none",
          color: "#140c00",
          fontWeight:'500',
          transition: 'background-color 0.3s ease' // Smooth background color transition
        }}
        whileHover={{ backgroundColor: '#0d47a1', color: '#cbeef3' }} // Change colors on hover
      >
        <a
          href={Cv}
          style={{ textDecoration: "none", color: 'inherit' }} // Make sure the color is inherited from the button
          download="Mathew Kadesh"
        >
          Download CV
        </a>
      </Button>
    </motion.div>
                
 <div className="social-links">
      {socialMedia.map((item) => (
               <motion.a
          key={item.icon}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '1.5rem', margin: '10px' }}
          whileHover={{ scale: 1.5, opacity: 0.8, color: item.color }}
          >
          <FontAwesomeIcon icon={item.icon} className="mx-2" />
        </motion.a>
      ))}
    </div>
              </Card.Body>

            </Card>
          </div>
        </Col>
        <Col id="page-content-wrapper">
          <motion.div
            className="scrollable-content"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            {renderComponent()}
          </motion.div>
        </Col>
        
        <Col sm={1} className="d-none d-lg-block vertical-center" style={{ padding: "0" }}> {/* 'd-none d-lg-block' hides this column on smaller screens */}
        {buttonName.map((btn) => (
          <motion.button
            whileHover="hover"
            variants={buttonVariant}
            onClick={() => setActiveComponent(btn.btnName)}
            className="btn btn-light selectionBtn mx-auto d-block"
          >
            <FontAwesomeIcon icon={btn.btnIcon} />
          </motion.button>
        ))}
      </Col>
      </Row>
    </Container>
  );
}

export default ProfileCard;

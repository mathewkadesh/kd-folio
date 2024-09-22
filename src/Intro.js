import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {Col, Row, Button, Card, ButtonToolbar, ButtonGroup, Container,} from "react-bootstrap";
import "./Style.css";
import pic1 from "./res/myself/pic5.png";
import Cv from "./CV/MathewKadesh.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faSquareGithub, faLinkedin, faInstagramSquare} from "@fortawesome/free-brands-svg-icons"; // Correctly import brand icons


function Intro() {

  const designations = ['WEB DEVELOPER', 'UI/UX DESIGNER', 'FULLSTACK DEVELOPER'];
  const [currentDesignation, setCurrentDesignation] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesignation((currentDesignation) => 
        (currentDesignation + 1) % designations.length
      );
    }, 3000); // Change every 3000ms (3 seconds)

    return () => clearInterval(interval);
  }, []);

  const text = (
    <div> Let's make your digital presence pop! 🚀

    </div>
  );
  const socialMedia = [
    { icon: faFacebookSquare, link: 'https://www.facebook.com/mathewkadesh98', color:'#0080ff' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/mathew-kadesh-141b37188', color:'#00578a' },
    { icon: faSquareGithub, link: 'https://github.com/mathewkadesh', color:'black' },
    { icon: faInstagramSquare, link: 'https://www.instagram.com/ka_de_sh01?igsh=Y2hvbWQxYzNocDV4&utm_source=qr', color:'#a52a2a' },
  ];
  
  const [displayedText, setDisplayedText] = useState('');
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  let index = 0;
  let timeoutId;

  const typeText = () => {
    const textContent = getTextContent(text.props.children);
    setDisplayedText(textContent.substring(0, index));
    index++;

    if (index <= textContent.length) {
      timeoutId = setTimeout(typeText, 80); // Adjust typing speed here (in milliseconds)
    } else {
      setIsVisible(true);
    }
  };

  typeText();

  return () => {
    clearTimeout(timeoutId);
  };
}, []);

const getTextContent = (children) => {
  return React.Children.toArray(children)
    .map((child) => (typeof child === 'string' ? child : getTextContent(child.props.children)))
    .join('');
};
  
  return (
    <Container>
      <Row >
        <Col md={7} style={{ textAlign: "left", marginTop: "6%",paddingLeft:'10%' }}>
          <h1 style={{fontSize:'40px',fontWeight:'700',color:'#373636'}}>The home of<br/> <span style={{color:'#fb6363'}}>happy brands.</span></h1>
          <div>Hi there. My name’s Mathew Kadesh and I’m a
            <span><motion.div
          key={designations[currentDesignation]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}>
          <p className='designation' style={{fontSize:'14px'}}>{designations[currentDesignation]}</p>
        </motion.div></span>
        based in the South West of England. 
          Whether you’re a small-to-medium business, a start-up, global or local, I can work with you to create modern tech and creative design to build web experiences that sparkle and engage. 

          <br/><br/>Since I started in 2020, my proven process has helped many clients achieve their business goals. And I’d love to help you achieve yours.
        </div>

          {/* <h3 style={{fontWeight:'800', fontSize:'50px', fontFamily: 'Serif', color:'#373636'}}>CRAFTING DIGITAL ARTISTRY</h3> */}
        {/* <div className={`typing-animation-container ${isVisible ? 'visible' : ''}`} style={{height:'180px'}}> */}
      {/* <p style={{fontWeight:'500', fontSize:'20px', fontFamily: 'Sans-serif', color:'#373636'}}>{displayedText}</p>
      <div className="blinking-cursor"></div> */}
    {/* </div> */}
    <Button
        style={{
          margin: "20px 20px 20px 0px",
          padding: "10px",
          backgroundColor: "#ff6362",
          border: "none",
          color: "#140c00",
          fontWeight:'500',
          transition: 'background-color 0.3s ease' // Smooth background color transition
        }}
        whileHover={{ backgroundColor: '#0d47a1', color: '#cbeef3' }}>
        <a href={Cv}
          style={{ textDecoration: "none", color: 'white' }} // Make sure the color is inherited from the button
          download="Mathew Kadesh">
          Download CV </a>
      </Button>

      <div className="social-links">
      {socialMedia.map((item) => (
               <motion.a
               className='LinkBtn'
          key={item.icon}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
         
          whileHover={{ scale: 1.5, opacity: 0.8, color: item.color, backgroundColor:'white' }}
          >
          <FontAwesomeIcon icon={item.icon} className="mx-2" />
        </motion.a>
      ))}
    </div>
        </Col>
        <Col>
        <div class="profile-container">
        <div class="background-shapes">
            <div class="circle large"></div>
            <div class="circle small"></div>
            <div class="half-circle"></div>
            <div class="half-circle-small"></div>
            <div class="dots">
                <div></div>
                <div></div>
                <div></div>
            </div>
            {/* <div className="curved-line"></div> */}
        </div>
        <img className="profile-image" variant="top" src={pic1} style={{height:'100%'}}/>
    </div>
        </Col>
      </Row>
      </Container>
  );
}

export default Intro;

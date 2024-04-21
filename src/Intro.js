import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {Col, Row, Button, Card, ButtonToolbar, ButtonGroup, Container,} from "react-bootstrap";
import "./Style.css";

function Intro() {

  const text = (
    <div>
      🚀 Blending modern tech and creative design to build web experiences that sparkle and engage. Let's make your digital presence pop!

    </div>
  );
  
  
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
      <Row style={{marginTop:'20px'}}>
        <Col md={12} style={{ textAlign: "center", marginTop: "5%" }}>
          <h1 style={{fontWeight:'800', fontSize:'80px', fontFamily: 'Serif'}}>CRAFTING DIGITAL ARTISTRY</h1>
              <div className={`typing-animation-container ${isVisible ? 'visible' : ''}`}>
      <p style={{fontWeight:'500', fontSize:'25px', fontFamily: 'Sans-serif'}}>{displayedText}</p>
      <div className="blinking-cursor"></div>
    </div>
          <p style={{ paddingLeft: "20px" }}></p>
         
        </Col>
      </Row>
      </Container>
  );
}

export default Intro;

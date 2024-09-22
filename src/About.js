import * as React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
// import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import { motion } from 'framer-motion';

import UI from "./res/service/ux-design.png";
import Animate from "./res/service/animate.png";
import Web from "./res/service/development.png";
import Development from "./res/service/app-development.png";
import pic1 from "./res/myself/pic5.png";

function About(){

    const services = [
      
        { title: 'UI/UX Design', text: '', logo: UI, bgcolor: '#ECF9FF' },
        { title: 'Web Development', text: '', logo: Web, bgcolor: '#FFECF9' },
        { title: 'App Development', text: '', logo: Development, bgcolor: '#F9FFEC' },
        { title: 'Web Animations', text: '', logo: Animate, bgcolor: '#FFF9EC' }
      
      ];
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.5, duration: 1.5 }
        }
      };


    return(
        <Container>
            <Row>
            <Col md={7} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column',  overflowY:'scroll', scrollbarWidth:'none' }}>
      {/* <h2 style={{ fontFamily: 'Cursive', fontSize: '2.5rem' }}>Who am I, actually?</h2> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <p style={{ fontSize: '50px', fontWeight: '400', fontFamily:'Freestyle Script', color:'#fb6363',padding:'10px 10%' }}>
          I am Mathew Kadesh
        </p>
       
        <p style={{ fontSize:'18px', textAlign:'justify', padding:"10px 10%"}}>
        Since 2020, I've been at the forefront of creating dynamic web experiences that bring brands to life. Based in Bristol, UK.
        The more I understand you, your ideas and ambitions, the better the design. 
        My expertise lies in designing sleek interfaces with Figma and animating them with ReactJS to create seamless user experiences.

        <br/><br/>Beyond coding, I'm a firm believer in understanding the heart of your project—your goals and vision. 
        When we collaborate, expect clarity, creativity, and a down-to-earth approach. 
        <br/><br/>Outside of work, I enjoy exploring the outdoors with my friends and adventure hiking.</p>
      </motion.div>

      {/* <Row className="justify-content-center text-center mt-5" style={{ alignItems: 'center' }}>
            <Col style={{ borderRight: '2px solid #e0e0e0', paddingRight: '20px' }}>
                <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#fb6363' }}>5+</div>
                <div style={{ fontSize: '16px', color: '#4a4a4a' }}>Satisfied Clients</div>
            </Col>
            <Col style={{ paddingLeft: '20px' }}>
                <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#fb6363' }}>10+</div>
                <div style={{ fontSize: '16px', color: '#4a4a4a' }}>Projects Completed</div>
            </Col>
        </Row> */}
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

export default About
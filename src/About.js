import * as React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
// import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import { motion } from 'framer-motion';

import UI from "./res/service/ux-design.png";
import Animate from "./res/service/animate.png";
import Web from "./res/service/development.png";
import Development from "./res/service/app-development.png";

function About(){

    const services = [
        { title: 'UI/UX Design', text: 'Crafting intuitive and aesthetically pleasing user experiences with Figma, where every pixel is placed with purpose.', logo: UI, bgcolor: '#ECF9FF' },
        { title: 'Web Development', text: 'Building dynamic and responsive websites with React JS, turning complex problems into elegant, user-friendly solutions.', logo: Web, bgcolor: '#FFECF9' },
        { title: 'App Development', text: 'Transforming ideas into reality through polished app development, where functionality meets finesse.', logo: Development, bgcolor: '#F9FFEC' },
        { title: 'Web Animations', text: 'I create immersive website experiences with Three.js, bridging the gap between the conventional and the extraordinary.', logo: Animate, bgcolor: '#FFF9EC' }
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
            <Col style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY:'scroll', scrollbarWidth:'none' }}>
      {/* <h2 style={{ fontFamily: 'Cursive', fontSize: '2.5rem' }}>Who am I, actually?</h2> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <p style={{ fontSize: '50px', fontWeight: '400', fontFamily:'Freestyle Script', color:'#ff9700' }}>
          Let's break the ice...
        </p>
       
        <p style={{ fontSize:'20px', textAlign:'justify'}}>
          <span style={{ fontFamily: 'Sans-serif', color:'black'}}>I'm Mathew Kadesh, a full-stack developer who isn't afraid of a little ✨magic✨. </span>
          I craft user interfaces with <span style={{ fontFamily: 'Sans-serif',color:'black' }}>Figma</span> and bring them to life with <span style={{ fontFamily: 'Sans-serif', color:'black' }}>ReactJS</span> and enchanting animations. Think of your website as a dance floor - every click a delightful move choreographed for maximum user engagement 🕺💃. Let's build something unforgettable!
        </p>
      </motion.div>
    </Col>
            </Row>
            <Row className="my-4">

                <h3 style={{margin:'25px 0px 25px 0px'}}>WHAT I DO !!</h3>
        {services.map((service, index) => (
           <Col md={6} key={index}>
           <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}
             className="m-2"
              // Custom property for background color
           >
             <Card className="card-embossed" style={{backgroundColor: service.bgcolor, border:'none' }}>
               <Card.Body>
                 <Row>
                   <Col md={2}>
                     <img src={service.logo} alt={service.title} style={{ width: '50px' }} />
                   </Col>
                   <Col>
                     <Card.Title>{service.title}</Card.Title>
                     <Card.Text style={{fontSize:'16px'}}>{service.text}</Card.Text>
                   </Col>
                 </Row>
               </Card.Body>
             </Card>
           </motion.div>
         </Col>
        ))}
      </Row>

        </Container>        
    );
}

export default About
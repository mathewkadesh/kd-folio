import React from 'react';
import { Row, Col, Container, Card } from "react-bootstrap";
import { motion } from 'framer-motion';

import figma from "./res/skills/figma.png";
import javascript from "./res/skills/js.png";
import bootstrap from "./res/skills/bootstrap.png";
import materialui from "./res/skills/materialui.png";
import react from "./res/skills/react.png";
import nextjs from "./res/skills/nextjs.png";
import nodejs from "./res/skills/nodejs.png";
import mysql from "./res/skills/mysql.png";
import tailwindcss from "./res/skills/tailwindcss.png";
import visual from "./res/skills/visual.png";
import rbootstrap from "./res/skills/rbootstrap.png";
import typescript from "./res/skills/typescript.png";
import npm from "./res/skills/npm.png";
import UI from "./res/service/ux-design.png";
import Animate from "./res/service/animate.png";
import Web from "./res/service/development.png";
import Development from "./res/service/app-development.png";

function Skills() {

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



    const iconVariants = {
        hover: {
          y: -10,
          scale: 1.2,
          transition: {
            duration: 0.2,
            yoyo: Infinity
          }
        }
    };

    const skillNames = [
        { imgSrc: react, name: 'React JS' },
        { imgSrc: javascript, name: 'Javascript' },
        { imgSrc: typescript, name: 'Typescript' },
        { imgSrc: nextjs, name: 'Next JS' },
        { imgSrc: nodejs, name: 'Node JS' },
        { imgSrc: npm, name: 'npm' },
        { imgSrc: mysql, name: 'MySQL' },
        { imgSrc: bootstrap, name: 'Bootstrap' },
        { imgSrc: tailwindcss, name: 'Tailwind CSS' },
        { imgSrc: materialui, name: 'Material UI' },
        { imgSrc: rbootstrap, name: 'R Bootstrap' },
        { imgSrc: figma, name: 'Figma' },
    ];

    return (
        <Container className='skillTitle'>
            {/* <h2 style={{ marginTop: '40px', marginBottom: '40px', color:'#545662' }}>SKILLS, TOOLS & TECHNOLOGIES</h2> */}
            <Row className='mb-4' style={{ marginTop: '20px'}}>


        <Row>
                <h3 style={{margin:'0px 0px 15px 0px', color:'#545662', textAlign:'center'}}>My Best Service</h3>
        {services.map((service, index) => (
           <Col md={3} key={index}>
           <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}
             className="m-2"
              // Custom property for background color
           >
             <Card className="card-embossed" style={{backgroundColor: service.bgcolor, border:'none', marginBottom:'15px'}}>
               <Card.Body>
                 <Row>
                   <Col md={2}>
                     <img src={service.logo} alt={service.title} style={{ width: '50px' }} />
                   </Col>
                   <Col>
                     
                     <Card.Text style={{fontSize:'16px'}}>{service.title}</Card.Text>
                   </Col>
                 </Row>
               </Card.Body>
             </Card>
           </motion.div>
         </Col>
        ))}
</Row>

<h3 style={{margin:'40px 0px 25px 0px', color:'#545662', textAlign:'center'}}>Skills & Technologies</h3>
{skillNames.map((skill, index) => (
    <Col xs={6} sm={4} md={2} lg={2} key={index} className='text-center'>
        <motion.div whileHover="hover" variants={iconVariants}>
            <img src={skill.imgSrc} className='skillimg' alt={skill.name} /><br/>
            <p className='skillsName'>{skill.name}</p>
        </motion.div>
    </Col>
))}

            </Row>
        </Container>
    );
}

export default Skills;

import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
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

function Skills() {
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
            <h2 style={{ marginTop: '40px', marginBottom: '10px' }}>SKILLS, TOOLS & TECHNOLOGIES</h2>
            <Row className='mb-4'>
                {skillNames.map((skill, index) => (
                    <Col xs={3} sm={3} md={4} lg={3} key={index} className='text-center'>
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

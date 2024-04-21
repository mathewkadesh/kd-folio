import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './Style.css';

function Resume() {

    const educationExperiences = [
        {
          id: 1,
          dateRange: '2023-2024',
          degree: 'Masters in Advanced Computer Science',
          institution: 'Cardiff Metropolitan University, Cardiff, UK '
        },
        {
          id: 2,
          dateRange: '2021-2022',
          degree: 'Bachelors in Software Engineering - First Class',
          institution: 'ICBT Campus, Colombo, Sri Lanka'
        },
        {
          id: 3,
          dateRange: '2019-2021',
          degree: 'SQA Level 7 in software Engineering',
          institution: 'Java Institute, Colombo, Sri Lanka'
        }
      ];

    const workExperiences = [
        {
          id: 1,
          dateRange: '2023',
          position: 'Junior Software Engineer – Internship',
          company: 'Mitax Consulting, Filton, UK '
        },
        {
          id: 2,
          dateRange: '2021-2022',
          position: 'Software Engineer (Project: Compliance As A Service Tool) ',
          company: 'eBuilder, Colombo, Sri Lanka'
        }
      ];

      const hoverAnimation = {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      };
    
      // Define the card transition properties
      const transitionProperties = {
        type: "spring",
        stiffness: 300,
      };
    
      // Define the card animation sequence
      const cardAnimation = (index) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.2, ...transitionProperties },
        whileHover: hoverAnimation,
      });
    
      const educationCardBg = '#fff8dc'; // Light gold color for education cards
      const workCardBg = '#fafad2'; 

    return (
      <Container className="resume-section">
            <Row>
                <h2 style={{ margin: '40px 0px' }}>RESUME</h2>
                <Col>
                    <h4><FontAwesomeIcon icon={faGraduationCap} /> EDUCATION</h4>
                    {educationExperiences.map((study, index) => (
                        <motion.div
                            {...cardAnimation(index)}
                            key={study.id}
                        >
                            <Card style={{
                                marginTop: '15px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: educationCardBg, // Use light gold color
                            }}>
                                <Card.Body>
                                    <Card.Title>{study.dateRange}</Card.Title>
                                    <Card.Subtitle>{study.degree}</Card.Subtitle>
                                    <p style={{ fontSize: '14px' }}>{study.institution}</p>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    ))}
                </Col>
                <Col>
                    <h4><FontAwesomeIcon icon={faBriefcase} /> EXPERIENCE</h4>
                    {workExperiences.map((job, index) => (
                        <motion.div
                            {...cardAnimation(index + 0.1)} // Slightly different delay for staggering effect
                            key={job.id}
                        >
                            <Card style={{
                                marginTop: '15px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: workCardBg, // Use a slightly different light gold color
                            }}>
                                <Card.Body>
                                    <Card.Title>{job.dateRange}</Card.Title>
                                    <Card.Subtitle>{job.position}</Card.Subtitle>
                                    <p style={{ fontSize: '14px' }}>{job.company}</p>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    ))}
                </Col>
            </Row>
        </Container>
      );
    
}

export default Resume
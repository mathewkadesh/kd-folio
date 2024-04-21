import React from 'react';
import { Card, Col, Row, Badge, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  const cardHover = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)"
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      whileHover="hover"
    >
      <motion.div variants={cardHover} className="card-embose">
        <Card className="h-100 bg-light rounded" style={{ border: 'none' }} onClick={() => openLink(project.demoLink)}>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text style={{ textAlign: 'justify', fontSize: '18px' }}>{project.description}</Card.Text>
            <div className="pt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} bg="secondary" className="me-2">{tech}</Badge>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const Projects1 = () => {
  const projects = [
    {
      id: 1,
      title: "Kiteup",
      description: "Kiteup is a premier website development company, we harness the winds of innovation to create stunning online platforms that captivate, engage, and leave a lasting impact.",
      technologies: ["React JS", "ReactBootstrap", "Node.js"],
      image: "img/kiteup.png",
      demoLink: "https://mathewkadesh.github.io/kiteup1/"
    },
    {
      id: 2,
      title: "Planetary Carbon Standard",
      description: "Planetary carbon standard (PCS) is the simplest version of a carbon standard that can be used for validation and verification of sustainable projects of all sizes from all around the world.",
      technologies: ["CSS", "PHP", "MySQL"],
      image: "img/psc.png",
      demoLink: "https://mathewkadesh.github.io/pcs/index.html"
    }
  ];

  return (
    <Container fluid="md">  {/* Fluid container for full width on small devices */}
      <h2 style={{ margin: '40px 0px 60px 0px' }}>PROJECTS</h2>  {/* Centered heading */}
      <Row className="g-4">
        {projects.map(project => (
          <Col key={project.id} xs={12} md={6}>  {/* Responsive grid */}
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects1;

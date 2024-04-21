import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMapMarkerAlt, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const contacts = [
        { icon: faMapMarkerAlt, title: "Address", description: "Find me for a face-to-face consultation.", detail: "Bristol, UK" },
        { icon: faMobileScreen, title: "Contact", description: "Call me or send a text message for quick support on your queries.", detail: "+44 7365163365" },
        { icon: faAt, title: "Email", description: "Send me an email and we’ll get back to you as soon as possible.", detail: "kadeshmathew@gmail.com" }
    ];

    return (
        <Container fluid="md">
            <h2 style={{ margin: '40px 0px 60px 0px' }}>CONTACT ME</h2>
            <Row className="justify-content-center text-center">
                {contacts.map((contact, index) => (
                    <Col xs={12} sm={6} md={4} key={index} className="mb-4">
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Card className="h-100">
                                <Card.Body>
                                    <FontAwesomeIcon icon={contact.icon} size="2x" className="mb-2" />
                                    <Card.Title>{contact.title}</Card.Title>
                                    <Card.Text>{contact.description}</Card.Text>
                                    <p>{contact.detail}</p>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Contact;

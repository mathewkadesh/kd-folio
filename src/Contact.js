import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <Container fluid="md" className="contact-container" style={{ marginTop: '60px' }}>
      <h1 style={{ margin: '40px 0px 60px 0px', color:'#545662', textAlign:'center' }}>Give me a call to chat through how I <br/>can help make your vision a reality.</h1>
      
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name <span style={{ color: 'red' }}>(required)</span></Form.Label>
              <Row>
                <Col md={6}>
                  <Form.Control type="text" placeholder="First Name" required />
                </Col>
                <Col md={6}>
                  <Form.Control type="text" placeholder="Last Name" required />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email Address <span style={{ color: 'red' }}>(required)</span></Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mt-3">
              <Form.Label>Subject <span style={{ color: 'red' }}>(required)</span></Form.Label>
              <Form.Control type="text" placeholder="Subject" required />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message <span style={{ color: 'red' }}>(required)</span></Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message..." required />
            </Form.Group>

            <div className="text-center mt-4">
              <Button variant="warning" type="submit" style={{ backgroundColor: '#FF5722', borderColor: '#FF5722', padding: '10px 40px', fontSize: '18px' }}>
                SUBMIT
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;






// import React from 'react';
// import { Card, Container, Row, Col } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import locationImg from './res/location.png';
// import contactImg from './res/telephone.png';
// import emailImg from './res/email.png';

// function Contact() {
//   const contacts = [
//     {icon: 'location.png', title: "Address", description: "Find me for a face-to-face consultation.", detail: <iframe
//     title="KiteUp Office Location"
//     width="100%"
//     height="200"
//     frameBorder="0"
//     scrolling="no"
//     marginHeight="0"
//     marginWidth="0"
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.07008460475!2d-2.6216138!3d51.511930199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871923ecb7ed7bd%3A0xeeaf67b49e29ef95!2sPassage%20Rd%2C%20Henbury%2C%20Bristol%20BS10%207HY!5e0!3m2!1sen!2suk!4v1692237112265!5m2!1sen!2suk"
//     ></iframe>
// },
//     {icon: 'telephone.png', title: "Contact", description: "Call me or send a text message for quick support on your queries.", detail: "+44 7365163365"},
//     {icon: 'email.png', title: "Email", description: "Send me an email and we’ll get back to you as soon as possible.", detail: "kadeshmathew@gmail.com" },
//     ];


//   const cardHover = {
//     hover: {
//       y: -10,
//       scale: 0.98,
//       transition: {
//         duration: 0.3, // A more typical duration for a hover effect
//       }
//     }
//   };

//   // Image hover variants
//   const imageHover = {
//     hover: {
//       scale: 1.1, // Scales the image up to 110% of its size
//       rotate: 360, // Rotates the image a full circle (360 degrees)
//       transition: {
//         duration: 0.3, // Duration for the scale and rotate animation
//       }
//     }
//   };

//   return (
//     <Container fluid="md" className="contact-container">
//       <h1 style={{ margin: '40px 0px 60px 0px', color:'#545662', textAlign:'center' }}>Give me a call to chat through how I <br/>can help make your vision a reality.
//       </h1>
//       <Row className="justify-content-center text-center" style={{ marginTop: '120px'}}>
//         {contacts.map((contact, index) => (
//           <Col xs={12} sm={6} md={4} key={index} className="mb-4">
//             <motion.div
//               whileHover="hover"
//               variants={cardHover}
//             >
//               <Card className="h-100" style={{ backgroundColor: '#545662', color: '#ffffff', height: '250px' }}>
//                 <Card.Body>
//                   <motion.img
//                     src={require(`./res/${contact.icon}`)} // Assuming create-react-app's asset handling
//                     alt={contact.title}
//                     variants={imageHover}
//                     whileHover="hover"
//                     style={{ height: '50px', margin: '5px 0px 10px 0px' }}
//                   />
//                   <Card.Title>{contact.title}</Card.Title>
//                   <Card.Text style={{fontWeight:'300', fontSize:'17px'}}>{contact.description}</Card.Text>
//                   <p style={{fontWeight:'500', fontSize:'19px'}}>{contact.detail}</p>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         ))}

        
//       </Row>
//     </Container>
//   );
// }

// export default Contact;

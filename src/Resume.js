import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Chrono } from "react-chrono";
import './Style.css';

const Resume = () => {
  const items = [{
    title: "Jan 2023 - May 2024",
    cardTitle: "Masters in Advanced Computer Science",
    cardSubtitle:"Cardiff Metropolitan University, Cardiff, UK",
    cardDetailedText: "Completed in Merit",
   }, {
    title: "May 2023 - Feb 2024",
    cardTitle: "Junior Web Developer – Apprenticeship",
    cardSubtitle:"Mitax Consulting, Filton, UK",
    cardDetailedText: "Designed user-friendly, responsive interfaces with ReactJS, NodeJS, CSS, and JavaScript. Implemented and optimized MySQL databases, ensuring data integrity and performance.",
  },{
    title: "2021 - 2022",
    cardTitle: "Bachelors in Software Engineering",
    cardSubtitle:"Cardiff Metropolitan University,  Colombo, Sri Lanka",
    cardDetailedText: "Completed in First Class",
  },{
    title: "2021 - 2022",
    cardTitle: "Website Developer",
    cardSubtitle:"eBuilder, Colombo, Sri Lanka",
    cardDetailedText: "Maintained robust code in React JS, HTML, and CSS, leading to a 30% increase in code reusability across projects. ",
  }]

  return (
    <Container fluid="md" className="contact-container">
  {/* <h2 style={{ margin: '40px 0px 60px 0px', color:'#545662' }}>CONTACT ME</h2> */}
  <Row className="justify-content-center text-center" style={{ marginTop: '120px'}}>
    <div style={{ width: '100%', height: '450px' }}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" hideControls={true} />
    </div>
  </Row>
</Container>
  )
}

export default Resume;

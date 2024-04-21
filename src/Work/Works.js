import * as React from "react";
import { Col, Row, Card, Button, Tab, Nav } from "react-bootstrap";
import "../Intro/Style.css";
import WebWork from "./WebWork";
import MobileWork from "./MobileWork";
import UIWork from "./UIWork";

function Works(props) {
  return (
    <Row
      style={{
        padding: "20px",
        marginLeft: "50px",
        marginRight: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="workHeader">MY PROJECTS</div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="web">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="workNavHeader">
                <Nav.Link eventKey="web">Websites</Nav.Link>
              </Nav.Item>
              <Nav.Item className="workNavHeader">
                <Nav.Link eventKey="mobile">Mobile Apps</Nav.Link>
              </Nav.Item>
              <Nav.Item className="workNavHeader">
                <Nav.Link eventKey="ui">UI/UX Designs</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="web">
                <WebWork />
              </Tab.Pane>
              <Tab.Pane eventKey="mobile">
                <MobileWork />
              </Tab.Pane>
              <Tab.Pane eventKey="ui">
                <UIWork />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Row>
  );
}

export default Works;

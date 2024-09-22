import * as React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import "./Style.css";
import UI from "../res/service/ux-design.png";
import Android from "../res/service/development.png";
import Web from "../res/service/coding.png";
import Seo from "../res/service/seo.png";
import Wireframe from "../res/service/wireframe.png";
import Test from "../res/service/test.png";

function Service() {
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
      <Col sm={3}>
        <h5
          style={{ color: "#C8375C", fontWeight: "bold", marginBottom: "20px" }}
        >
          SERVICES
        </h5>
        <h3 style={{ fontWeight: "bolder" }}>
          I Provide Wide <br />
          Range Of Digital <br /> Services
        </h3>
      </Col>

      <Col>
        <Row>
          <Card
            style={{
              width: "19rem",
              margin: "15px",
              padding: "10px",
              textAlign: "center",
              border: "none",
              backgroundColor: "#F7F8F8",
              borderRadius: "10px",
              // boxShadow: "0 0 15px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src={UI}
              style={{ width: "40%", margin: "auto" }}
            />
            <Card.Body>
              <Card.Title>UI/UX Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "19rem",
              margin: "15px",
              padding: "10px",
              textAlign: "center",
              border: "none",
              backgroundColor: "#F7F8F8",
              borderRadius: "10px",
              // boxShadow: "0 0 15px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src={Android}
              style={{ width: "40%", margin: "auto" }}
            />
            <Card.Body>
              <Card.Title>Android Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "19rem",
              margin: "15px",
              padding: "10px",
              textAlign: "center",
              border: "none",
              backgroundColor: "#F7F8F8",
              borderRadius: "10px",
              // boxShadow: "0 0 15px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src={Web}
              style={{ width: "40%", margin: "auto" }}
            />
            <Card.Body>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card
            style={{
              width: "19rem",
              margin: "15px",
              padding: "10px",
              textAlign: "center",
              border: "none",
              backgroundColor: "#F7F8F8",
              borderRadius: "10px",
              // boxShadow: "0 0 15px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src={Seo}
              style={{ width: "40%", margin: "auto" }}
            />
            <Card.Body>
              <Card.Title>SEO</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "19rem",
              margin: "15px",
              padding: "10px",
              textAlign: "center",
              border: "none",
              backgroundColor: "#F7F8F8",
              borderRadius: "10px",
              // boxShadow: "0 0 15px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src={Wireframe}
              style={{ width: "40%", margin: "auto" }}
            />
            <Card.Body>
              <Card.Title>Wireframe Design</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "19rem",
              margin: "15px",
              padding: "10px",
              textAlign: "center",
              border: "none",
              backgroundColor: "#F7F8F8",
              borderRadius: "10px",
              // boxShadow: "0 0 15px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src={Test}
              style={{ width: "40%", margin: "auto" }}
            />
            <Card.Body>
              <Card.Title>Testing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Row>
  );
}

export default Service;

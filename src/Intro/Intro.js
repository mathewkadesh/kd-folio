import React, { useRef } from "react";
import {
  Col,
  Row,
  Button,
  Card,
  ButtonToolbar,
  ButtonGroup,
} from "react-bootstrap";
import myself from "../res/myself.png";
import Behance from "../res/behance.png";
import Linkedin from "../res/linkedin.png";
import Dribble from "../res/dribbble.png";
import Whatsapp from "../res/whatsapp.png";
import "./Style.css";

import Cv from "../CV/MathewKadesh.pdf";

function Intro() {
  return (
    
      <div
        
        className="container"
        id="container"
        style={{
          padding: "0px",
          margin: "0px",
          marginRight: "0px",
        
        }}
      >
        <Col sm={{ span: 5, offset: 1 }} style={{}}>
          <Card
            className="back"
            style={{
              borderRadius: "0 0 0 50px",
              width: "600px",
              border: "none",
            }}
          >
            <Card.ImgOverlay style={{ position: "unset", padding: "0px" }}>
              <Card.Img
                variant="bottom"
                src={myself}
                style={{
                  width: "450px",
                  float: "right",
                  clear: "right",
                  border: "none",
                }}
              />

              {/* <ButtonToolbar
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "0",
                  transform: "translate(-50%, 50%)",
                }}
              >
                <ButtonGroup>
                  <Button
                    style={{
                      padding: "0px",
                      alignItems: "center",
                      display: "flex",
                      border: "none",
                      backgroundColor: "transparent",
                      borderRadius: "50%",
                    }}
                  >
                    <img src={Behance} style={{ width: "35px" }} />
                  </Button>
                  <Button
                    style={{
                      marginLeft: "20px",
                      padding: "0px",
                      alignItems: "center",
                      display: "flex",
                      border: "none",
                      backgroundColor: "transparent",
                      borderRadius: "50%",
                    }}
                  >
                    <img src={Dribble} style={{ width: "35px" }} />
                  </Button>
                  <Button
                    style={{
                      marginLeft: "20px",
                      padding: "0px",
                      alignItems: "center",
                      display: "flex",
                      border: "none",
                      backgroundColor: "transparent",
                      borderRadius: "50%",
                    }}
                  >
                    <img src={Linkedin} style={{ width: "35px" }} />
                  </Button>
                </ButtonGroup>
              </ButtonToolbar> */}
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col
          sm={{ span: 5, offset: 1 }}
          style={{ textAlign: "left", marginTop: "8%" }}
        >
          {/* <h1
            style={{
              padding: "20px",
              fontWeight: "1000",
              fontFamily: "Sacramento, cursive",
            }}
          >
            Welcome Everyone
          </h1> */}
          <h1 style={{ padding: "20px", fontWeight: "1000", fontSize: "100px" }}>
            I'm
            <span style={{ color: "#1e88e5" }}> Mathew</span>
            <span style={{ color: "#42a5f5" }}> Kadesh</span>!
          </h1>
          <h6
            style={{
              padding: "20px",
              color: "#294c60",
              fontFamily: "Roboto Mono, monospace",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            FRONTEND DEVELOPER
          </h6>
          <p style={{ paddingLeft: "20px" }}>
            I'm pretty professional UI designer for the past 4 years of
            experience. <br />
            Need some help?{" "}
          </p>
          <Button
            style={{
              margin: "20px",
              padding: "10px",
              backgroundColor: "#cbeef3",
              border: "none",
              color: "#0d47a1",
            }}
          >
            <a
              href={Cv}
              style={{ textDecoration: "none" }}
              download="Mathew Kadesh"
            >
              Download CV
            </a>
          </Button>
          <Button
            style={{
              margin: "20px",
              padding: "10px",
              backgroundColor: "#B3EFC9",
              border: "none",
              color: "#00A23D",
            }}
          >
            Hire Me
            <img src={Whatsapp} style={{ width: "20px", marginLeft: "10px" }} />
          </Button>
        </Col>

       
      </div>
   
  );
}

export default Intro;

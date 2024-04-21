import * as React from "react";
import { Col, Row, Card, Button, Tab, Nav } from "react-bootstrap";
import "../Intro/Style.css";
import KiteUp from "./assets/kiteup.png";
import ExpandIcon from "../res/expand.png";
import { TabView, TabPanel } from "primereact/tabview";
import ReactCardFlip from "react-card-flip";
import WorkData from "./Work.json";
import { Tag } from "primereact/tag";

const CardStyle = {
  border: "1px solid #03506f",
  borderRadius: "30px",
  padding: "20px",
  margin: "20px",
  width: "270px",
  height: "170px",
  backgroundColor: "#75cfb8",
};

function UIWork() {
  const [isFlipped, setFlipped] = React.useState(false);

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div>
            <Card
              className="workCard"
              onClick={() => setFlipped((prev) => !prev)}
            >
              <Card.Img variant="top" src={KiteUp} className="workCardImg" />
              <Card.Body>
                <Row>
                  <Col sm={10}>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      KiteUp
                    </Card.Title>
                  </Col>
                  <Col sm={2}>
                    <img src={ExpandIcon} style={{ width: "30px" }} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card
              className="workCard"
              onClick={() => setFlipped((prev) => !prev)}
            >
              <Card.Body>
                <Tag className="mr-2" severity="warning" value="HTML"></Tag>
                <Tag className="mr-2" severity="success" value="CSS"></Tag>
                <Tag className="mr-2" severity="info" value="Bootstrap"></Tag>
                <br />
                <br />
                <h3>KiteUp</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="https://mathewkadesh.github.io/kiteup.github.io/">
                  Visit for visual
                </a>
              </Card.Body>
            </Card>
          </div>
        </ReactCardFlip>
      </Col>
    </Row>
  );
}

export default UIWork;

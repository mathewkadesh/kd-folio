import * as React from "react";
import { Col, Row, Card, Button, Tab, Nav } from "react-bootstrap";
import "../Intro/Style.css";
import Work1 from "../res/work1.jpg";
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

function MobileWork() {
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
              <Card.Img
                variant="top"
                src={Work1}
                className="workCardImg"
                style={{ width: "160px", alignSelf: 'center' }}
              />
              <Card.Body>
                <Row>
                  <Col sm={10}>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      Get Doctor
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
                <Tag className="mr-2" severity="warning" value="Flutter"></Tag>
                <Tag className="mr-2" severity="success" value="SQL lite"></Tag>
                <br />
                <br />
                <h3>Get Doctor</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type.
                </p>
              </Card.Body>
            </Card>
          </div>
        </ReactCardFlip>
      </Col>
    </Row>
  );
}

export default MobileWork;

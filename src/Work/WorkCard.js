
import { Card } from 'primereact/card';
 

function WorkCard(props) {
  return (
    <Col>
      <Card className="workCard">
        <Card.Img variant="top" src={Work1} className="workCardImg" />
        <Card.Body>
          <Row>
            <Col sm={10}>
              <Card.Title style={{ fontWeight: "bold" }}>
                {props.title}
              </Card.Title>
            </Col>
            <Col sm={2}>
              <img src={props.image} style={{ width: "30px" }} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default WorkCard;

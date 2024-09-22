import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TimelineItem = ({ id, dateRange, degree, institution }) => {
  return (
    <li>
      <Row className={`direction-${institution}`}>
        <Col xs={12} className="flag-wrapper text-center">
          <span className="hexa"></span>
          <span className="flag">{id}</span>
          <span className="time-wrapper">
            <span className="time">{dateRange}</span>
          </span>
        </Col>
        <Col xs={12} className="desc">
          {degree}
        </Col>
      </Row>
    </li>
  );
};

export default TimelineItem;

import * as React from 'react';
import {Card} from "primereact/card";
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";


function Timeline(){
    return(
        <Row>
            <Col sm={{span:5, offset:1}}>
            <Card style={{padding:'10px', margin:'10px'}}>
            <Card title="UI/UX design" style={{ width: '25rem', marginBottom: '2em' }}></Card>
            <Card title="UI/UX design" style={{ width: '25rem', marginBottom: '2em' }}></Card>
            <Card title="UI/UX design" style={{ width: '25rem', marginBottom: '2em' }}></Card>
            </Card>
            </Col>
            <Col sm={{span:5, offset:1}}>
            <h3>My awesome services</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pulvinar ex, non luctus mauris. Nullam dictum arcu quis enim ornare venenatis. Pellentesque interdum aliquam convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent laoreet tellus nibh, ut molestie massa interdum nec. Pellentesque laoreet risus magna, non porttitor nunc vulputate id. Aenean ut dolor ante. Quisque felis arcu, mattis id nulla in, lobortis rutrum nisi.</p>
            </Col>
        </Row>
        
    )
}

export default Timeline
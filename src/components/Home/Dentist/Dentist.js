import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Dentist = ({ dentist }) => {
    const { name, email, img, description, expertise } = dentist;
    return (
        <div className="">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fw-bold text-success">{name}</Card.Title>
                        <h6>{email}</h6>
                        <h6 className="text-danger">{expertise}</h6>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Dentist;
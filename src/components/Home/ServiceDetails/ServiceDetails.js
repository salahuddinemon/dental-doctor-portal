import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    // const { id, name, img, description, price, facilities } = service;
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const exactService = services.filter(item => item.id === serviceId)
    return (
        <div className="container">
            <h1 className="fw-bold my-5">Visit For <span className="text-success">{exactService[0]?.name}</span></h1>
            <Card className="card-container" style={{ width: '30rem' }}>
                <Card.Img variant="top" src={exactService[0]?.img} />
                <Card.Body>
                    <Card.Title>{exactService[0]?.name}</Card.Title>
                    <Card.Text>
                        {exactService[0]?.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="fw-bolder">Fees: ${exactService[0]?.price}</ListGroupItem>
                    <ListGroupItem className="fw-bold">Facilities: {exactService[0]?.facilities}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/services"><Button variant="success">Go All Services</Button>{' '}</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;
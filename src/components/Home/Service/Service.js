import { Button, Card, Col } from "react-bootstrap";
import './Service.css';

const Service = ({ service }) => {
    const { name, img } = service;
    return (
        <div className="service-container">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fw-bold">{name}</Card.Title>
                        <div className="d-grid gap-2">
                            <Button className="btn-style fw-bold" variant="dark" size="sm">
                                See Details
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Service;
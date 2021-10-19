import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../../images/about-img.png'

const About = () => {
    return (
        <div className="container">
            <h1 className="fw-bold my-5 about-heading">A Few Words About Our Clinic</h1>
            <div className="d-flex mt-5">
                <div className="text-container mt-5">
                    <h1 className="fw-bold mt-5">Who We Are</h1>
                    <p className="text-success fw-bold">"We make your smile more perfect, brighter and broader to the world"</p>
                    <p>We are a competent team of dentists who completely understand the importance of quality dental in a busy life. Our practice is based on high standards and new technologies which reflect on beautiful and healthy smiles of our clients.</p>
                    <>
                        <div className="mb-2 mt-4">
                            <Button variant="success" size="md">
                                More About us
                            </Button>{' '}
                        </div>
                    </>
                </div >
                <div className="mt-3">
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src={img} rounded />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div >
        </div >
    );
};

export default About;
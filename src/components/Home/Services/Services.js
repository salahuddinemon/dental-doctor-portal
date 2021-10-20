import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <h1 className="fw-bold my-5">OUR HEALTHY <span className="text-success">TEETH</span> TREATMENTS</h1>
            <div className="sevices-container">
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;
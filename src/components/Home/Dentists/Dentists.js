import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Dentist from '../Dentist/Dentist';

const Dentists = () => {
    const [dentists, setDentists] = useState([]);
    useEffect(() => {
        fetch('./dentists.json')
            .then(res => res.json())
            .then(data => setDentists(data))
    }, [])
    return (
        <div className="container my-5">
            <h1 className="fw-bold my-5">Our <span className="text-success">Dentists</span></h1>
            <Row xs={1} md={3} className="g-4">
                {
                    dentists.map(dentist => <Dentist
                        key={dentist.id}
                        dentist={dentist}
                    ></Dentist>)
                }
            </Row>
        </div>
    );
};

export default Dentists;
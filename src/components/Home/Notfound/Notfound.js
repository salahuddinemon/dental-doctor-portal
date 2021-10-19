import React from 'react';
import { Button } from 'react-bootstrap';

const Notfound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>...Opps, this is not avilable that search</p>
            <Button href="/" variant="success">Go Back</Button>{' '}

        </div>
    );
};

export default Notfound;
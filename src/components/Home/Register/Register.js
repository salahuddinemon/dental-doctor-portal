import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-form">
            <h3>Register</h3>
            <Form onSubmit="" className="">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="ms-auto">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Label>Re-enter password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter Password" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="warning px-5" type="submit">
                    Create Your account
                </Button>
            </Form>
            <p className="mt-3">Already have an account? <Link to="/sign-in">Sign-In</Link></p>
            <div>
                <hr /> <Button variant="warning px-5" type="submit">
                    Google Sign-In
                </Button> <hr />

            </div>
        </div>
    );
};

export default Register;
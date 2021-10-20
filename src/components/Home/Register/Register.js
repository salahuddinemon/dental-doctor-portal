import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="register-form">
            <h3>Register</h3>
            <Form onSubmit={handleRegistration} className="">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="ms-auto">Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>

                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
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
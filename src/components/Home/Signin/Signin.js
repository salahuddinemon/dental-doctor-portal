import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Signin.css'

const Signin = () => {
    const { signInUsingGooogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './';

    const handGoogleSignIn = () => {
        signInUsingGooogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="signin-form">
            <h2>Sign-In</h2>
            <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="ms-auto">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="warning px-5" type="submit">
                    Sign-In
                </Button>
            </Form>
            <p className="mt-3">New to here? <br /> <Link to="/register"><Button variant="secondary">Create Account</Button>{' '}</Link></p>
            <div>
                <hr /> <Button
                    variant="warning px-5" type="submit"
                    onClick={handGoogleSignIn}
                >Google Sign-In
                </Button> <hr />
            </div>
        </div >
    );
};

export default Signin;
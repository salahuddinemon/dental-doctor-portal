import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Signin.css'

const Signin = () => {
    const { signInUsingGooogle, handleEmailLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home';

    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [error, setError] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value);

    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        handleEmailLogin(email, password)
            .then((result) => {
                result.user &&
                    history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            })
    }



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
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button onClick={handleLogin} variant="warning px-5" type="submit">
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
                <div className="text-danger">
                    <p>{error}</p>
                </div>
            </div>
        </div >
    );
};

export default Signin;
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import banner from '../../../images/banner.jpg'
import './Header.css'
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand className="d-flex" href="#home">
                            <img
                                src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt=""
                            />
                            <h3 className="ms-3">MediTeeth +</h3>
                        </Navbar.Brand>
                        <Nav className="nav-link gap-3">
                            <NavLink className="fs-5 nav-container" to="/home">Home</NavLink>
                            <NavLink className="fs-5 nav-container" to="/services">Services</NavLink>
                            <NavLink className="fs-5 nav-container" to="/blog">Blog</NavLink>
                            <NavLink className="fs-5 nav-container" to="/dentists">Dentists</NavLink>
                            <NavLink className="fs-5 nav-container" to="/about">About us</NavLink>
                            <NavLink className="fs-5 nav-container" to="/contact">Contact</NavLink>
                            {
                                user.email ?
                                    <Button onClick={logOut} variant="warning px-5" type="submit">
                                        Sign-Out
                                    </Button>
                                    :
                                    <NavLink className="fs-5 nav-container" to="/sign-in">Sign-In</NavLink>}
                        </Nav>
                    </Container>
                </Navbar>
                <div className="head-text">
                    <div className="text-on-banner">
                        <h1 className="my-3 fw-bold">Professional <br /> Dental<span className="text-success">Clinic</span></h1>
                        <h5 className="my-3">Qualified dental caring for all your dental needs</h5>
                        <Button className="my-3 fw-bold" variant="success"   >Request An Appointment</Button>{' '}
                    </div>
                    <img width="100%" src={banner} alt="" />
                </div>
            </>
        </div>
    );
};

export default Header;
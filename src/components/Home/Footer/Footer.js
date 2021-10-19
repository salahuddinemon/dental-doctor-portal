import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FormControl, InputGroup, Button, Navbar } from 'react-bootstrap';
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import logo from '../../../images/logo.png'
const Footer = () => {
    return (
        // show header text & button into header image
        <div>
            <div className="my-5">
                <h3 className="text-center">Subscribe Newsletter</h3>
                <InputGroup className="mb-3 w-50 mx-auto">
                    <FormControl
                        placeholder="Enter your email id"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <div className="mx-2">
                        <Button variant="primary" size="md">Subscribe</Button>{' '}
                    </div>
                </InputGroup>
            </div>

            {/* display contact info */}
            <footer className="footer-container text-white py-4">
                <div className="footer-info d-flex justify-content-center my-5">
                    <div className="ms-5">
                        <h3 className="text-warning">PHONE & ADDRESS</h3>
                        <h1 className="text-success">+800 4759 1232</h1>
                        <p>3674 Harrison Street
                            <br />  San Francisco, CA 94143, USA<br />info@mediteeth.com</p>
                    </div>

                    {/* display social icon */}
                    <div className="me-5">
                        <div className="my-2">
                            <Navbar.Brand className="d-flex" href="#home">
                                <img
                                    src={logo}
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                                <div>
                                    <h3 className="ms-3 text-white">MediTeeth +</h3>
                                </div>
                            </Navbar.Brand>
                        </div>
                        <h3 className="text-warning">Follow Us On</h3>
                        <div className="d-flex icon-container">
                            <div className="icon">
                                <a href="https://facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                            </div>
                            <div className="icon">
                                <a href="http://instagram.com/"> <FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                            <div className="icon">
                                <a href="http://youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* display copyright  */}
                <p className="mt-2 mb-2 copyright">
                    Copyrights <small><FontAwesomeIcon icon={faCopyright} /> 2021 All Rights Reserved by Medixer. Developed by emonthex</small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
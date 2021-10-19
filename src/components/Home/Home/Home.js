import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/About';
import Services from '../Services/Services';
import Dentists from '../Dentists/Dentists';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Dentists></Dentists>
            <Contact></Contact>
        </div>
    );
};

export default Home;
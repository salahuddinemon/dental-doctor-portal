import React from 'react';
import Contact from '../Contact/Contact';
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
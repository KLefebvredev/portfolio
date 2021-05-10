import React from 'react';
import Footer from '../components/Footer';
import Homebg from '../components/Homebg';
import Nav from '../components/Nav';
import Perso from '../components/Perso';

const Home = () => {
    return (
        <div className="home">
            <Homebg/>
            <Nav/>
            <Perso/>
            <Footer/>
        </div>
    );
};

export default Home;
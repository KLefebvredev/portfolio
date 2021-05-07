import React from 'react';
import Footer from '../components/Footer';
import Homebg from '../components/Homebg';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div className="home">
            <Homebg/>
            <Nav/>
            <Footer/>
        </div>
    );
};

export default Home;
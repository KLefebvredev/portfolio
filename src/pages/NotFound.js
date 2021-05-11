import React from 'react';
import Footer from '../components/Footer';
import { NavLink } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="notfound">
            <h1>Erreur 404</h1>
            <NavLink className="backhome" to="/">Revenir à l'accueil</NavLink>
            <Footer/>
        </div>
    );
};

export default NotFound;
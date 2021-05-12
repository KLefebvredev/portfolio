import React, { useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Projetbg from '../components/Projetbg';
import Hackathon from '../components/Hackathon';
import Reactworld from '../components/Reactworld';

const Projet = () => {

    const [projPage, setProjPage] = useState(false);


    return (
        <div>
            <Projetbg/>
            <Nav/>
        <ul className='projects-container'>
      <li
        onClick={() => setProjPage(true)}

      >
        Hackathon
      </li>
      <li
        onClick={() => setProjPage(false)}
      >
        Réact World
      </li>
      {projPage ? <Hackathon/> : <Reactworld />}
            <Footer/>
        </ul></div>
    );
};

export default Projet;
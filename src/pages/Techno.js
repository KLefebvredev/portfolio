import React, {useState} from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Maitrise from '../components/Maitrise';
import Amelio from '../components/Amelio';
import Technobg from '../components/Technobg';

const Techno = () => {
    const [technoPage, setTechnoPage] = useState(false);



    return (
        <div>
            <Technobg/>
            <Nav/>
      <h2
        style={{ background: technoPage ? null : "red" }}
        onClick={() => setTechnoPage(false)}
      >
        Techno Maitrisés
      </h2>
      <h2
        style={{ background: technoPage ? "red" : null }}
        onClick={() => setTechnoPage(true)}
      >
        A améliorer
      </h2>
      {technoPage ? <Maitrise /> : <Amelio />}
            <Footer/>
        </div>
    );
};

export default Techno;
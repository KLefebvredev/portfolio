import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <nav className="navigation">
        <ul>
          <li>
            <NavLink exact to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="techno">Technologie</NavLink>
          </li>
          <li>
            <NavLink to="projet">Projet</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
        </div>
    );
};

export default Nav;
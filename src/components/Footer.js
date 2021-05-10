import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h4>Copyright © KLefebvre.dev 2021</h4>
      <div className="emote">
      <a href="https://www.linkedin.com/in/kevin-lefebvre-9b1499159/">
        <img src="./img/linkedin.svg" alt="Logo Linkedin" />
      </a>
      <a href="https://github.com/KLefebvredev">
        <img className="git" src="./img/github.svg" alt="Logo github" />
      </a>
      </div>
    </div>
  );
};

export default Footer;

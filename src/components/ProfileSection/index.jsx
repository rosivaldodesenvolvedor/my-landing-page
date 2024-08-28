import React from "react";
import Rosivaldo from "../../assets/Rosivaldo.jpg";
import "./index.css";

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="profile-content">
        <h1>
          Olá, meu nome é <span className="highlight">Rosivaldo de Souza</span>
        </h1>
        <p>Desenvolvedor Front-End</p>
        <div className="buttons">
          <button className="download-btn">Download CV</button>
          <button className="contact-btn">Entrar em contato</button>
        </div>
      </div>
      <div className="profile-image">
        <img src={Rosivaldo} alt="Gabriel Brito" />
      </div>
    </section>
  );
};

export default ProfileSection;

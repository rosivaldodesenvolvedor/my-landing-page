import React from "react";
import Rosivaldo from "../../assets/Rosivaldo.jpg";
import "./index.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <div className="profile-card">
              <div className="profile-picture">
                <img src={Rosivaldo} alt="Profile Picture" />
                <span className="status-indicator"></span>
              </div>
              <div className="profile-info">
                <h1>Rosivaldo Souza</h1>
              </div>
            </div>
          </div>
          <ul className="nav-menu">
            <li>
              <button className="nav-item">Home</button>
            </li>
            <li>
              <button className="nav-item">Sobre</button>
            </li>
            <li>
              <button className="nav-item">Projetos</button>
            </li>
            <li>
              <button className="nav-item">Contato</button>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Header;

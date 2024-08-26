import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Meu Portfólio</h1>
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
  );
};

export default Header;

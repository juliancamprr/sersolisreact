import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <main>
      <div>
        <header>
          <div className="navbar">
            <div className="logo">
              <Link to="/">Sersolis</Link>
            </div>
            <ul className="links">
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              
              <li>
                <Link to="/servicos">Serviços</Link>
              </li>
            </ul>
            <a
              href="https://discord.gg/5RBBmsW8Cx"
              target="_blank"
              rel="noreferrer"
              className="action_btn"
            >
              Servidor
            </a>
            <div className="toggle_btn" onClick={toggleMobileMenu}>
              <i
                className={`fa-solid ${
                  isMobileMenuOpen ? "fa-xmark" : "fa-bars"
                }`}
                style={{ color: "#ffffff" }}
              ></i>
            </div>

            {isMobileMenuOpen && (
              <div
                className={`dropdown_menu ${isMobileMenuOpen ? "open" : ""}`}
              >
                <ul>
                  <li>
                    <Link to="/">Início</Link>
                  </li>
                  <li>
                    <Link to="/sobre">Sobre</Link>
                  </li>
                  <li>
                    <Link to="/servicos">Serviços</Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-gray-400 cursor-default">Equipe</Link>
                    <p id="deactivate">Desativado</p>
                  </li>
                  <li className="servidor">
                    <Link to="https://discord.gg/5RBBmsW8Cx">Servidor</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
      </div>
    </main>
  );
}

export default Navbar;

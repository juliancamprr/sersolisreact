
import { Link } from "react-router-dom";

import './Navbar.css'

function Navbar() {

  return (
    <main>
      <div>
        <header>
          <div className="navbar">
            <div className="logo">
              <a href="/">Sersolis</a>
            </div>
            <ul className="links">
             
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
              
            </ul>
            <a href="https://discord.gg/5RBBmsW8Cx" target="_blank" rel="noreferrer" class="action_btn">Servidor</a>
            <div className="toggle_btn">
              
            </div>
          </div>
        </header>
      </div>
    </main>
  );
}

export default Navbar;

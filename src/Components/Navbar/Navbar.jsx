
import { BrowserRouter, Link } from "react-router-dom";

import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Services from '../../Pages/Services/Services';

function Navbar() {

  console.log('Olá, primo')
  return (
    <main>
      <div>
        <header>
          <div className="navbar">
            <div className="logo">
              <img src="" alt="" />
            </div>
            <ul className="links">
              <BrowserRouter>
                <li></li>
                <li></li>
                <li></li>
              </BrowserRouter>
            </ul>
            <a href="https://discord.gg/5RBBmsW8Cx" target="_blank" rel="noreferrer" class="action_btn">Servidor</a>
            <div className="toggle_btn">
              Feito
            </div>
          </div>
        </header>
      </div>
    </main>
  );
}

export default Navbar;

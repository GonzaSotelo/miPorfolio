import  { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="header">
      <div className="imagen-logo">
        <img src="./../../img/logo-naranja.png" alt="" />
      </div>

      <div className="menu-hambur">
        <div className="navbar">
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
          {menuVisible && (
            <nav className="menu">
              <Link to="/" className="menu-item" onClick={() => setMenuVisible(false)}>
                Home
              </Link>
              <Link to="/about" className="menu-item" onClick={() => setMenuVisible(false)}>
                Sobre Mi
              </Link>
              <Link to="/projects" className="menu-item" onClick={() => setMenuVisible(false)}>
                Proyectos
              </Link>
              <Link to="/contact" className="menu-item" onClick={() => setMenuVisible(false)}>
                Contacto
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
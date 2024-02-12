import { useState } from 'react';


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
        <div className="menu">
          <div className="menu-item">Home</div>
          <div className="menu-item">Sobre Mi</div>
          <div className="menu-item">Mis Proyectos</div>
          <div className="menu-item">Contacto</div>
        </div>
      )}
    </div>

</div>
        </header>

    
  )
}

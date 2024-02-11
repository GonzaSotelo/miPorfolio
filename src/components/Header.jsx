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
          <div className="menu-item">Opción 1</div>
          <div className="menu-item">Opción 2</div>
          <div className="menu-item">Opción 3</div>
          <div className="menu-item">Opción 4</div>
        </div>
      )}
    </div>

</div>
        </header>

    
  )
}

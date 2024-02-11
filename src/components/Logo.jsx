import  { useState } from 'react';

function Logo() {
  const [imagen, setImagen] = useState('./../../img/nombreok.png');

  const cambiarImagen = () => {
    setImagen('./../../img/nombre.png');
  };

  const restaurarImagen = () => {
    setImagen('./../../img/nombreok.png');
  };

  return (
    <img
      className="logo-modal-home"
      id="miImagen"
      src={imagen}
      alt=""
      onMouseOver={cambiarImagen}
      onMouseOut={restaurarImagen}
    />
  );
}

export default Logo;

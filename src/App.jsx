

import './App.css'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Asegúrate de importar Routes
import React, { useEffect } from 'react';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Projects from './pages/ProyectosPage';
import Contact from './pages/ContactoPage';


const HexagonBackground = () => {
  useEffect(() => {
    const bgAnimation = document.getElementById('bgAnimation');
    const numberOfColumns = 23; // Número de columnas
    const numberOfRows = 23; // Número de filas
    const hexagonSize = 70; // Tamaño de los hexágonos

    for (let row = 0; row < numberOfRows; row++) {
      for (let col = 0; col < numberOfColumns; col++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');

        // Posicionamiento de los hexágonos en filas y columnas
        const x = col * (hexagonSize * 1.5); // Ajusta el 1.5 para la distancia entre hexágonos
        const y = row * (hexagonSize * Math.sqrt(2.3)); // Ajusta el Math.sqrt(3) para la distancia vertical

        colorBox.style.left = `${x}px`;
        colorBox.style.top = `${y}px`;

        bgAnimation.append(colorBox);
      }
    }
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HexagonBackground />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
export default App;
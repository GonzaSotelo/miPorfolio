import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



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
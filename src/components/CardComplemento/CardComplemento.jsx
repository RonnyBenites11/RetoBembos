import React, { useState, useEffect } from 'react';
import './CardComplemento.css';
import axios from 'axios';

export const CardComplemento = () => {
  const [complementData, setComplement] = useState([]);

  useEffect(() => {
    const readComplement = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/complementos');
        setComplement(data[0].tipos); // Accedemos al array "tipos" dentro de los datos
      } catch (error) {
        console.log(error);
      }
    };
    readComplement();
  }, []);

  return (
    <div className="complement-container">
      <h3 className="complement-title">Complementos:</h3>
      <div className="complement-products">
        {complementData.map((complement, index) => (
          <div className="complement-card" key={index}>
            <div className="complement-img">
              <img src={complement.img} alt={complement.nombre} />
            </div>
            <div className="complement-info">
              <span className="complement-name">{complement.nombre}</span>
              {/* Verificación de precio antes de usar toFixed */}
              <span className="complement-price">
                S/. {complement.precio ? complement.precio.toFixed(2) : 'N/A'}
              </span>
              <button className="promos-info-btn">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

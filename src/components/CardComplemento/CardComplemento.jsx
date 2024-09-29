import React from 'react';
import './CardComplemento.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const CardComplemento = () => {
  const [complementData, setComplement] = useState([]);

  useEffect(() => {
    const readComplement = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/complementos');
        setComplement(data);
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
        {complementData.map((complements, index) => (
          <div className="complement-card" key={index}>
            <div className="complement-img">
              <img src={complements.img} alt="imagen" />
            </div>
            <div className="complement-info">
              <span className="complement-name">{complements.nombre}</span>
              <span className="complement-price">S/. {complements.precio.toFixed(2)}</span>
              <button className="promos-info-btn">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

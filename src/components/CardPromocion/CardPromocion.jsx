/*import React from 'react';*/
import './CardPromocion.css';
import '../CardMenu/CardMenu.css';
import axios from 'axios';

import { useEffect, useState } from 'react';

export const CardPromocion = () => {
  const [promoData, setPromoData] = useState([]);

  useEffect(() => {
    const readPromo = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/promociones_online');
        setPromoData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    readPromo();
  }, []);

  return (
    <div className="card-promo-container">
      {promoData.map((promo, index) => (
        <div className="container" key={index}>
          <div className="card-img">
            <img src={promo.img} alt="imagen" />
          </div>
          <span className="card-desc">-51%</span>
          <img className="card-icon" src="/src/assets/img/favorite.svg" alt="" />
          <div className="card-info">
            <h3 className="card-name">{promo.nombre}</h3>
            <div className="card-prices">
              <span className="card-price-promo">S./{promo.precio_actual}0</span>
              <span className="card-price-real">S/.{promo.precio_antiguo}0</span>
            </div>
            <button className="card-btn">Ver más</button>
          </div>
        </div>
      ))}
    </div>
  );
};

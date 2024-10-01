import React from 'react';
import './CardPromociones.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const CardPromociones = ({ promoName }) => {
  const promoTitle = {
    personales: 'Promociones Personales',
    dos: 'Promociones para 2',
    compartir: 'Promociones para compartir',
    cupones: 'Cupones',
  };

  const title = promoTitle[promoName];

  const [promosData, setPromosData] = useState([]);

  useEffect(() => {
    const readPromos = async () => {
      try {
        let url = '';

        if (promoName === 'personales') {
          url = 'http://localhost:3000/promociones_personales';
        } else if (promoName === 'dos') {
          url = 'http://localhost:3000/promociones_para_dos';
        } else if (promoName === 'compartir') {
          url = 'http://localhost:3000/promociones_para_compartir';
        } else {
          url = 'http://localhost:3000/cupones';
        }

        const { data } = await axios.get(url);
        setPromosData(data);
        /* console.log(data);*/
      } catch (error) {
        console.log(error);
      }
    };
    readPromos();
  }, []);

  return (
    <div className="promos-container">
      <div className="promos-title">
        <img src="/src/assets/img/user.svg" alt="" />
        <h3>{title}</h3>
      </div>
      <div className={`promos-products promos-products-${promoName}`}>
        {promosData.map((promos, index) => (
          <div className="promos-card" key={index}>
            <div className="promos-info">
              <h4 className="promos-info-title">
                {promoName === 'personales'
                  ? promos.nombre
                  : promoName === 'dos'
                  ? promos.nombre_azul || promos.nombre_negro
                  : promoName === 'compartir'
                  ? promos.nombre_azul || promos.nombre_negro
                  : promos.nombre}
              </h4>
              <p className="promos-info-txt">{promos.descripcion}</p>
              <div className="promos-info-price">
                <span className="promos-price-desct">S/. {promos.precio_actual}0</span>
                <span className="promos-price-real">
                  S/.{' '}
                  {typeof promos.precio_antiguo === 'number' &&
                  !isNaN(promos.precio_antiguo) &&
                  promos.precio_antiguo !== null
                    ? promos.precio_antiguo.toFixed(2)
                    : promos.precio_antiguo !== ''
                    ? Number(promos.precio_antiguo).toFixed(2)
                    : '0.00'}
                </span>
              </div>
              <button className="promos-info-btn">Ver más</button>
            </div>
            <div className="promos-img">
              <img src={promos.img} alt="" />
              <span className="promos-desct">-{promos.descuento}%</span>
              <a href="#" className="promos-terms">
                Terminos y Condiciones
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import './Promociones.css';
import Header from '../Header';
import Footer from '../Footer';
import { CardPromociones } from '../CardPromociones/CardPromociones';
import { CardComplemento } from '../CardComplemento/CardComplemento';

export const Promociones = () => {
  return (
    <div>
      <Header className="fix" />
      <div className="promociones-container">
        <div className="promo-navigation-links">
          <a href="#">Promociones Personales</a>
          <a href="#">Promociones para 2</a>
          <a href="#">Promociones para compartir</a>
          <a href="#">Cupones</a>
        </div>
        <div className="promo-products">
          <div className="promo-products-container">
            <div className="promo-desct">
              <span>Promo online con hasta 50% de descuento</span>
              <div className="promo-search">
                <input type="text" placeholder="Buscar producto" />
                <img src="/src/assets/img/seacrh.svg" alt="" />
              </div>
            </div>
            <p className="promo-title">Conoce nuestras promociones | BEMBOS</p>
            <CardPromociones promoName={'personales'} />
            <CardComplemento />
            <CardPromociones promoName={'dos'} />
            <CardComplemento />
            <CardPromociones promoName={'compartir'} />
            <CardComplemento />
            <CardPromociones promoName={'cupones'} />
            <CardComplemento />
          </div>
        </div>
      </div>
      <div className="promos-cart">
        <button>Ver Carrito</button>
      </div>
      <Footer />
    </div>
  );
};

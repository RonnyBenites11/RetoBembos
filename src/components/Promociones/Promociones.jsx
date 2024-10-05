import React from 'react';
import './Promociones.css';
import Header from '../Header';
import Footer from '../Footer';
import { CardPromociones } from '../CardPromociones/CardPromociones';
import { CardComplemento } from '../CardComplemento/CardComplemento';
import PreguntasFrecuentes from '../Combos/PreguntasFrecuentes';
import { Cart } from '../Cart/Cart';
import { useState } from 'react';
import { ContenBg } from '../ContentBg/ContenBg';

export const Promociones = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  const closeCart = () => {
    setVisible(false);
  };
  return (
    <div>
      <ContenBg visible={visible} />
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
            <PreguntasFrecuentes
              isPromotion={true}
              faqData={[
                {
                  question:
                    '¿Las promociones de hamburguesas delivery online se pueden pagar presencialmente en mi domicilio?',
                  answer:
                    'crujiente sandwich de pollo Los puntos que se reciben por la compra del  varían entorno al tamaño de la misma, en proporción se otorga un punto por cada S/1. Conoce tus puntos desde la APP o ingresando en la Web.',
                },
                {
                  question: '¿De qué están hechas la hamburguesa de pollo o hamburguesa broaster de Bembos?',
                  answer:
                    'Las hamburguesas de pollo están hechas de carne de pollo, junto con las más exquisitos ingredientes peruanos. ¡Pídelo por Online delivery!,',
                },
                {
                  question: '¿Los sandwiches de pollo a la parrilla de Bembos están acompañados de papas fritas?',
                  answer:
                    'Sí, el Sandwich de pollo a la parrillaincluye distintos acompañamientos, podrás incluir: Huevo, Papas extras, Plátano, queso y Tocino. También puedes pedirlo únicamente solo sin acompañamiento.',
                },
                {
                  question: '¿Qué adicionales tienen los sandwich de pollo a la parrilla de Bembos?',
                  answer:
                    'Los adicionales que tienen las hamburguesas de pollo varían según elección del usuario. Entre estas tenemos añadir: Plátano, huevo, queso, tocino y papas al hilo extras. También añadir las más exquisitas salsas peruanas.',
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="promos-cart" onClick={toggleVisibility}>
        <button>Ver Carrito</button>
      </div>
      <Cart visible={visible} onClose={closeCart} />

      <Footer />
    </div>
  );
};

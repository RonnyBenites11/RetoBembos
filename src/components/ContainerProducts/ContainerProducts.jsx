import React, { useRef } from 'react';
import './ContainerProducts.css';
import { CardPromocion } from '../CardPromocion/CardPromocion';
import { CardMenu } from '../CardMenu/CardMenu';

export const ContainerProducts = ({ sectionName }) => {
  const sectionTitle = {
    promocion: 'Promociones de hamburguesas online',
    menu: 'Menu de hamburguesas online',
  };

  const title = sectionTitle[sectionName];
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Cambiar aquí
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Cambiar aquí
    }
  };

  const renderContent = () => {
    switch (sectionName) {
      case 'promocion':
        return <CardPromocion />;
      case 'menu':
        return <CardMenu ref={swiperRef} />;
      default:
        return null; // Añadir un caso por defecto
    }
  };

  return (
    <section className={`section-container container-${sectionName}`}>
      <div className="container-width products-container">
        <div className="products-title">
          <h2>{title}</h2>
          <div className="products-icon">
            <img src="/src/assets/img/left-arrow.svg" alt="left" onClick={handlePrev} style={{ cursor: 'pointer' }} />
            <img src="/src/assets/img/right-arrow.svg" alt="right" onClick={handleNext} style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <div className="products-swiper">{renderContent()}</div>
      </div>
    </section>
  );
};

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
  const promoRef = useRef(null);
  const menuRef = useRef(null);

  const handleNext = () => {
    if (sectionName === 'promocion' && promoRef.current) {
      promoRef.current.swiper.slideNext();
    } else if (sectionName === 'menu' && menuRef.current) {
      menuRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (sectionName === 'promocion' && promoRef.current) {
      promoRef.current.swiper.slidePrev();
    } else if (sectionName === 'menu' && menuRef.current) {
      menuRef.current.swiper.slidePrev();
    }
  };

  const renderContent = () => {
    switch (sectionName) {
      case 'promocion':
        return <CardPromocion ref={promoRef} />;
      case 'menu':
        return <CardMenu ref={menuRef} />;
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
            <img src="/src/assets/img/left-arrow.svg" alt="left" onClick={handlePrev} />
            <img src="/src/assets/img/right-arrow.svg" alt="right" onClick={handleNext} />
          </div>
        </div>
        <div className="products-swiper">{renderContent()}</div>
      </div>
    </section>
  );
};

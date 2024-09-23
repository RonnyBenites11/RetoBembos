import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ContainerProducts.css';
import { CardPromocion } from '../CardPromocion/CardPromocion';
import { CardMenu } from '../CardMenu/CardMenu';

export const ContainerProducts = ({ sectionName }) => {
  const sectionTitle = {
    promocion: 'Promociones de hamburguesas online',
    menu: 'Menu de hamburguesas online',
  };

  const title = sectionTitle[sectionName];

  const renderContent = () => {
    switch (sectionName) {
      case 'promocion':
        return <CardPromocion />;
      case 'menu':
        return <CardMenu />;
    }
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={`section-container container-${sectionName}`}>
      <div className="container-width products-container">
        <div className="products-title">
          <h2>{title}</h2>
          <div className="products-icon">
            <img src="/src/assets/img/left-arrow.svg" alt="left" />
            <img src="/src/assets/img/right-arrow.svg" alt="right" />
          </div>
        </div>
        <div className="products-swiper">
          <Slider {...settings}></Slider>
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import Slider from 'react-slick';
import './Carrusel.css';
import "slick-carousel/slick/slick.css"; // Importa los estilos base de slick
import "slick-carousel/slick/slick-theme.css"; // Importa los estilos del tema de slick

const Carrusel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Imágenes por defecto
  const defaultImages = [
    'https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1726768117_36-anos-de-aniversario-nuevo-web-1280x400.webp',
    'https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1726246077_duo-de-locura-nuevo-bb-1280x400.webp',
    'https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1720020970_combo-la-patriota-bb-1280x400.webp',
    'https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1726068907_duo-queso-y-tocino-web-bb-nuevo-1280x400.webp',
    'https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1726003832_duo_a_lo_pobre_1280x400.webp',
  ];

  // Si se pasan imágenes como props, úsalas, si no, usa las por defecto
  const imagesToDisplay = images || defaultImages;

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {imagesToDisplay.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
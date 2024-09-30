import React, { useEffect, useState, forwardRef } from 'react';
import './CardPromocion.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

export const CardPromocion = forwardRef((props, ref) => {
  const [promoData, setPromoData] = useState([]);

  useEffect(() => {
    const readPromo = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/promociones_online');
        setPromoData(data);
      } catch (error) {
        console.log(error);
      }
    };
    readPromo();
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        ref={ref}
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {promoData.map((promo, index) => (
          <SwiperSlide key={index}>
            <div className="container">
              <div className="card-img">
                <img src={promo.img} alt={promo.nombre} />
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

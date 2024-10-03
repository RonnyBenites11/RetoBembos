
import React, { useState, useEffect, forwardRef } from 'react';
import './CardComplemento.css';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

export const CardComplemento = forwardRef((props, ref) => {
  const [complementData, setComplement] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readComplement = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get('http://localhost:3000/complementos');
        setComplement(data[0].tipos); // Accedemos al array "tipos" dentro de los datos
      } catch (error) {
        setError('Failed to load data');
        console.log(error);
      } finally {
        setLoading(false);n
      }
    };
    readComplement();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="complement-container">
      <h3 className="complement-title">Complementos:</h3>
      <Swiper
        ref={ref}
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={60}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        hashNavigation={{
          watchState: true,
        }}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {complementData.map((complement, index) => (
          <SwiperSlide key={index} data-hash={`slide${index + 1}`}>
            <div className="complement-card">
              <div className="complement-img">
                <img src={complement.img} alt={complement.nombre} />
              </div>
              <div className="complement-info">
                <span className="complement-name">{complement.nombre}</span>
                <span className="complement-price">S/. {complement.precio}</span>
                <button className="promos-info-btn">Ver más</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

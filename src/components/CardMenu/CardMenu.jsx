import React, { useEffect, useState, forwardRef } from 'react';
import './CardMenu.css';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export const CardMenu = forwardRef((props, ref) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const readMenu = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/menu');
        // Asegurarse de que el formato es correcto antes de asignar los datos
        if (data && Array.isArray(data) && data[0]?.tipos) {
          setMenuData(data[0].tipos);
        } else {
          console.error('Formato de datos inesperado');
        }
      } catch (error) {
        console.log(error);
      }
    };
    readMenu();
  }, []);

  return (
    <div className="swiper-container swiper-menu">
      <Swiper
        ref={ref}
        slidesPerView={4}
        slidesPerGroup={1}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: 'fraction', // Si decides habilitar la paginación
        }}
        navigation={true} // Habilitar navegación si lo necesitas
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {menuData.map((menu, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="card-img">
                <img src={menu.img} alt={menu.nombre} />
              </div>
              <div className="card-info">
                <h3 className="card-name">{menu.nombre}</h3>
                <button className="card-btn">Ver Todos</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

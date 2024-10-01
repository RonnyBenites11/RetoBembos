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
        /* setMenuData(data);*/

        setMenuData(data[0]?.tipos || []);
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
        /*  pagination={{
          type: 'fraction',
        }}*/
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
{
  /*<div className="card-menu-container">
      {menuData.map((menu, index) => (
        <div className="card" key={menu.id}> {}
          <div className="card-img">
            <img src={menu.img} alt={menu.nombre} /> {}
          </div>
          <div className="card-info">
            <h3 className="card-name">{menu.nombre}</h3>
            <button className="card-btn" onClick={() => (window.location.href = menu.link)}>
              Ver Todos
            </button>
          </div>
        </div>
      ))}
    </div>*/
}

/*const menuBtns = document.querySelectorAll('.card-btn');
      menuBtns.forEach((btn) => {
        btn.addEventListener('click', (window.location.href = `${menu.link}`));
      });*/

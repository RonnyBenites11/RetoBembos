import React, { useEffect, useState } from 'react';
import './Cart.css';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Cart = ({ visible, onClose }) => {
  const [addComplementData, setAddComplement] = useState([]);

  useEffect(() => {
    const readAddComplement = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/complementos');
        setAddComplement(data[0]?.tipos || []);
      } catch (error) {
        console.log(error);
      }
    };
    readAddComplement();
  }, []);

  return (
    <div className={`cart-container ${visible ? 'visible' : ''}`}>
      <div className="cart-adress">
        <p className="cart-adress-title">
          <span className="cart-adress-txt">Entregar en: </span>Miraflores Bowling Park 135,
          <span className="cart-adress-city">Lima - Miraflores</span>
        </p>
        <div className="cart-down-img">
          <img src="/src/assets/img/down-arrow.svg" alt="" />
        </div>
        <div className="cart-close" onClick={onClose}>
          <span>x</span>
        </div>
      </div>
      <div className="cart-info">
        <div className="cart-info-top">
          <p className="cart-title">Tu Carrito</p>
          <p className="cart-txt">
            ¿Cuentas con cupones de Dscto.? <span>Ingrésalos en el siguiente paso</span>
          </p>
        </div>
        <div className="cart-product">
          <div className="cart-product-row">
            <div className="cart-detail">
              <div className="cart-detail-img">
                <img
                  src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-cheese-base.jpg"
                  alt="product"
                />
              </div>
              <div className="cart-detail-container">
                <p className="cart-detail-product">03 x Hamburguesa Cheese</p>
                <p className="cart-detail-price">S/. 59.70</p>
              </div>
            </div>
            <div className="cart-btns">
              <div className="cart-btns-top">
                <div className="icon-delete">
                  <img src="/src/assets/img/delete.svg" alt="delete" />
                </div>
                <span>Leer más</span>
              </div>
              <div className="cart-btns-bottom">
                <span className="cart-minus">-</span>
                <span className="cart-quantity">3</span>
                <span className="cart-plus">+</span>
              </div>
            </div>
          </div>
          <div className="cart-subtotal">
            <div className="cart-subtotal-txt">
              <span>Subtotal</span>
              <span>S/ 54.70</span>
            </div>
            <div className="cart-subtotal-txt">
              <span>Delivery</span>
              <span>S/ 6.50</span>
            </div>
          </div>
          <div className="cart-total">
            <span>Total a pagar</span>
            <span>S/ 61.20</span>
          </div>
        </div>
        <div className="cart-add-container">
          <p className="cart-add-title">También Agregar</p>
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }} // Si deseas paginación
          >
            {addComplementData.map((addcomplement, index) => (
              <SwiperSlide key={index}>
                <div className="cart-add-product">
                  <div className="cart-add-img">
                    <img src={addcomplement.img} alt="imagen" />
                  </div>
                  <div className="cart-add-detail">
                    <div className="cart-add-txt">
                      <span className="cart-add-name">{addcomplement.nombre}</span>
                      <span className="cart-add-price">S/. {addcomplement.precio}</span>
                    </div>
                    <button className="cart-add-btn">Agregar</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`cart-footer ${visible ? 'visible' : ''}`}>
          <button className="cart-btn-pay cart-footer-btn">
            <span className="cart-footer-quantity">1</span>Ir a pagar{' '}
            <span className="cart-footer-price">S/. 61.20</span>
          </button>
          <button className="cart-btn-buy cart-footer-btn">Seguir comprando</button>
        </div>
      </div>
    </div>
  );
};

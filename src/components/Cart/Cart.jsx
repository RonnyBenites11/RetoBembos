import React from 'react';
import './Cart.css';

export const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-adress">
        <p className="cart-adress-title">
          <span className="cart-adress-txt">Entregar en: </span>Miraflores Bowling Park 135,
          <span className="cart-adress-city">Lima - Miraflores</span>
        </p>
        <div className="cart-down-img">
          <img src="/src/assets/img/down-arrow.svg" alt="" />
        </div>
        <div className="cart-close">
          <span>x</span>
        </div>
      </div>
    </div>
  );
};

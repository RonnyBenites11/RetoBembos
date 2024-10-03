import React, { useState } from 'react';
import './Navigation.css';
import { IoStorefrontOutline } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { Fa0 } from 'react-icons/fa6';
import { Cart } from '../Cart/Cart';
import { ContenBg } from '../ContentBg/ContenBg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Combo from '../Combos/Combo/Combo';

import Menu from '../Menu/Menu';

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  const closeCart = () => {
    setVisible(false);
  };
  return (
    <div>
      {/* Vista de escritorio */}
      <div className="desktop-view">
        <div className="navigation-container">
          <div className="navigation-content max-container">
            <div className="navigation-menu">
              <div className="nav-menu-item">
                <Link to="/menu" >
                  <img
                    src="https://www.bembos.com.pe/_nuxt/img/bmb_menu.1db9cff.svg"
                    alt="MENÚ"
                    width="36"
                    height="26"
                  />
                  <span>MENÚ</span>
                </Link>
              </div>
              <div className="nav-menu-item">
                <Link to="/combo">
                  <img src="https://www.bembos.com.pe/_nuxt/img/combo.e6f7c16.svg" alt="COMBOS" />
                  <span>COMBOS</span>
                </Link>
              </div>
              <div className="nav-menu-item hasSubs">
                <Link to="/promociones">
                  <img src="https://www.bembos.com.pe/_nuxt/img/bmb_promociones.b14af19.svg" alt="PROMOCIONES" />
                  <span>PROMOCIONES</span>
                </Link>
                {/* <ul className="hoversubs">
                  <li>
                    <a href="#">Promociones Personales</a>
                  </li>
                  <li>
                    <a href="#">Promociones para 2</a>
                  </li>
                  <li>
                    <a href="#">Promociones para compartir</a>
                  </li>
                  <li>
                    <a href="#">Cupones</a>
                  </li>
                </ul>*/}
              </div>
              <div className="nav-menu-item">
                <Link to="/hamburguesas">
                  <img src="https://www.bembos.com.pe/_nuxt/img/bmb_hamburguesa.3449e24.svg" alt="HAMBURGUESAS" />
                  <span>HAMBURGUESAS</span>
                </Link>
              </div>
              <div className="nav-menu-item">
                <Link to="/beneficios">
                  <img src="https://www.bembos.com.pe/_nuxt/img/bmb_beneficios.f8fa7ff.svg" alt="BENEFICIOS" />
                  <span>BENEFICIOS</span>
                </Link>
              </div>
            </div>
            <div className="navigation-cart">
              <div className="main-top-center">
                <div className="btn_recojo">
                  <img src="/src/assets/img/market.svg" alt="" className="icono-tienda" />
                  {/*<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="99.754"
                    height="30.587"
                    viewBox="0 0 99.754 86.587"
                  ></svg>*/}
                  <span className="text_recojo">
                    Pide en tiendas <span className="text_recojo_red">sin colas</span>
                  </span>
                </div>
              </div>
              <button className="btn_cart" onClick={toggleVisibility}>
                <div className="btn-cart-img">
                  <img src="/src/assets/img/cart.svg" alt="" />
                </div>
                <p>
                  <span>0</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContenBg visible={visible} />

      <Cart visible={visible} onClose={closeCart} />
        
     
      {/* Vista móvil */}
      <div className="mobile-view">
        <div className="header">
          <a href="/" className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="96.286" viewBox="0 0 276.667 96.286">
              <img src="https://es.m.wikipedia.org/wiki/Archivo:Bembos_logo15.png" alt="Logo" />
            </svg>
          </a>
          <div className="order-button">
            <button className="order-now">
              <span>
                Pide en tiendas<strong>SIN COLAS</strong>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="99.754" height="30.587" viewBox="0 0 99.754 86.587">
                {/* SVG paths omitted for brevity */}
              </svg>
            </button>
          </div>
          <div className="right-section">
            <a className="phone-icon">
              <img src="/img/icon-phone-header.svg" alt="30" height="36" />
            </a>
            <button className="menu-button" aria-label="button-responsive">
              <svg xmlns="http://www.w3.org/2000/svg" width="67.348" height="52.412" viewBox="0 0 67.348 52.412">
                {/* SVG path omitted for brevity */}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default Navigation;

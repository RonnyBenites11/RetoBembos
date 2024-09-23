import React from 'react';
import './Navigation.css';
import { IoStorefrontOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-content max-container">
        <div className="navigation-menu">
          <div className="nav-menu-item">
            <a href="/menu">
              <img src="https://www.bembos.com.pe/_nuxt/img/bmb_menu.1db9cff.svg" alt="MENÚ" width="36" height="26" />
              <span>MENÚ</span>
            </a>
          </div>
          <div className="nav-menu-item">
            <a href="/copa-america" className="icon-copa-america">
              <img src="https://www.bembos.com.pe/img/copa-america/logo-2.png" alt="Icono copa america" />
            </a>
          </div>
          <div className="nav-menu-item">
            <a href="/menu/combos">
              <img src="https://www.bembos.com.pe/_nuxt/img/combo.e6f7c16.svg" alt="COMBOS" />
              <span>COMBOS</span>
            </a>
          </div>
          <div className="nav-menu-item hasSubs">
            <a href="/promociones/delivery-hamburguesas">
              <img src="https://www.bembos.com.pe/_nuxt/img/bmb_promociones.b14af19.svg" alt="PROMOCIONES"  />
              <span>PROMOCIONES</span>
            </a>
            <ul className="hoversubs">
              <li><a href="#">Promociones Personales</a></li>
              <li><a href="#">Promociones para 2</a></li>
              <li><a href="#">Promociones para compartir</a></li>
              <li><a href="#">Cupones</a></li>
            </ul>
          </div>
          <div className="nav-menu-item">
            <a href="/menu/hamburguesas">
              <img src="https://www.bembos.com.pe/_nuxt/img/bmb_hamburguesa.3449e24.svg" alt="HAMBURGUESAS"  />
              <span>HAMBURGUESAS</span>
            </a>
          </div>
          <div className="nav-menu-item">
            <a href="/beneficios">
              <img src="https://www.bembos.com.pe/_nuxt/img/bmb_beneficios.f8fa7ff.svg" alt="BENEFICIOS"  />
              <span>BENEFICIOS</span>
            </a>
          </div>
          <div className="navigation-cart">
          <div className="main-top-center">
            <button className="btn_recojo">
            <IoStorefrontOutline className='icono-tienda'/>
              <svg xmlns="http://www.w3.org/2000/svg" width="99.754" height="30.587" viewBox="0 0 99.754 86.587">
              
              </svg>
              <div className="text_recojo">
                Pide en tiendas <strong>SIN COLAS</strong>
              </div>
            </button>
          </div>
          <button className='btn_cart'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32.009" height="32.009" viewBox="0 0 32.009 32.009">

              {<LuShoppingCart/>}
            </svg>
            <p><span>0</span></p>
          </button>
        </div>
        </div>
        
       
      </div>
    </div>
    
  );
};

export default Navigation;
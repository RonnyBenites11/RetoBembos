import React from 'react';
import './Header.css';
import { BsTelephone } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
  return (
    <header>
        <div className="header">
          <div className="delivery-info">
              <img src='https://www.bembos.com.pe/_ipx/q_50,s_1110x57/https://d31npzejelj8v1.cloudfront.net/media/minibanner/1110x57.jpg'></img>
              
          </div>
          <div className="main-header">
              <div className='logo'>
              <img src="/public/img/Bembos_logo_2014_con_fondo-Photoroom (1).png" alt="Bembos Logo" className="logo" />
              </div>
              <div  className="main-top-center"></div>
              <div className="contact-info">
                  <div>
                  <BsTelephone className='svg-telefono' />

                  </div>
                  <span className="phone"> Delivery  <span className='direccion'>Lima <SlArrowDown className='icono-v'/>   014191919</span></span>
                  <div className='boton'>
                  <button className="login-button"> <img className='icono-persona' src='https://www.bembos.com.pe/_nuxt/img/ico_user.3b47628.svg'/>Ingresar o crear tu cuenta</button>

                  </div>
            
            
            
              </div>
        </div>
    </div>
    </header>
  );
};

export default Header;
import React from 'react';
import './Header.css';
import { BsTelephone } from 'react-icons/bs';
import { SlArrowDown } from 'react-icons/sl';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="delivery-info">
          <img src="https://www.bembos.com.pe/_ipx/q_50,s_1110x57/https://d31npzejelj8v1.cloudfront.net/media/minibanner/1110x57.jpg"></img>
        </div>
        <div className="main-header">
          <div className="header-container">
            <div className="logo">
              <Link to= "/"> <img src="/public/img/Bembos_logo_2014_con_fondo-Photoroom (1).png" alt="Bembos Logo" className="logo" /></Link>
             
            </div>
            <div className="contact-info">
              <div className="contact-info-detail">
                <div className="contact-phone">
                  <img src="/src/assets/img/phone.svg" alt="" />
                </div>
                <div className="contact-container">
                  <div className="contact-info-top">
                    <span className="phone">Delivery</span>
                    <select className="direccion" name="city" id="city">
                      <option value="LIMA">LIMA</option>
                    </select>
                  </div>
                  <span className="contact-number">014191919</span>
                </div>
              </div>
              <div className="login-container">
                <div className="login-img">
                  <img className="icono-persona" src="https://www.bembos.com.pe/_nuxt/img/ico_user.3b47628.svg" />
                </div>
                <a className="login-link">Ingresar o crear tu cuenta</a>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

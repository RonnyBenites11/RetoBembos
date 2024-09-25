import React from 'react';
import './Menu.css';
import Header from '../Header';
import Navigation from '../Navigation';


import Footer from '../Footer';
import Carrusel from '../Carrusel';
import Categorias from './Categorias';


const Menu = () => {
    const newImages = [
        'https://www.bembos.com.pe/_ipx/q_75/https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1724771825_martes-de-hawaiana-bb-nuevo-1280x400.webp',
        'https://www.bembos.com.pe/_ipx/q_75/https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1726246077_duo-de-locura-nuevo-bb-1280x400.webp',
        'https://www.bembos.com.pe/_ipx/q_75/https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1720020970_combo-la-patriota-bb-1280x400.webp',
      ];
    
      
  return (
    <div className="menu">
      <div className="fix">
        <Header />
        <Navigation />
      </div>
      <div className='container-menu'>
        <div className="menu-container">
            <div className="menu-info">
                <p>
                Se está mostrando el menú del <br />
                restaurante
                </p>
            </div>
            <div className="menu-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="21.896" height="28.058" viewBox="0 0 21.896 28.058">
                <g>
                    <path fill="#030819" d="M1325.628,1016.306a1.264,1.264,0,0,1-.743-.241c-.416-.3-10.2-7.529-10.2-16.869a10.948,10.948,0,1,1,21.9,0c0,9.34-9.788,16.566-10.2,16.869A1.262,1.262,0,0,1,1325.628,1016.306Zm0-25.532a8.535,8.535,0,0,0-8.422,8.422c0,6.688,6.237,12.432,8.421,14.237,2.183-1.809,8.423-7.566,8.423-14.237A8.535,8.535,0,0,0,1325.628,990.774Z" transform="translate(-1314.68 -988.248)" />
                    <g transform="translate(5.727 5.726)">
                    <path fill="#030819" d="M1331.235,1010.024a5.221,5.221,0,1,1,5.221-5.221A5.227,5.227,0,0,1,1331.235,1010.024Zm0-7.916a2.695,2.695,0,1,0,2.7,2.7A2.7,2.7,0,0,0,1331.235,1002.107Z" transform="translate(-1326.014 -999.581)" />
                    </g>
                </g>
                </svg>
                <p className="menu-title">GENERAL</p>
            </div>
            <div className="menu-button">
                <a href="/ubicacion">CAMBIAR</a>
            </div>
            
    </div>
    <div className="body-menu__title">
        
                <h1>CONOCE NUESTRO MENÚ | BEMBOS</h1>
                <br></br>
                </div>
                
        <div className='carrusel'>
        <Carrusel images={newImages}/>
        </div>
        <Categorias/>
      </div>
      
    
      <Footer />
    </div>
  );
};

export default Menu;
import React from 'react';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';

import Footer from '../../Footer';

const Bebidas = () => {
  return (
    <div>
      <Header className="fix" />
      <Navigation />
      <NavigationSec />
      <CombosBembos
        apiUrl="http://localhost:3000/bebidas"
        title="Bebidas para refrescar tu dia | BEMBOS"
       
      />
      <div className='span'></div> 
      <AnuncioApp />
      <Footer/>
    </div>
  );
};

export default Bebidas;

import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Carrusel from '../Carrusel';
import Anuncio from '../Anuncio';
import Footer from '../Footer';
import { ContenBg } from '../ContentBg/ContenBg';
import { Cart } from '../Cart/Cart';
import { ContainerProducts } from '../ContainerProducts/ContainerProducts';








const Principal = () => {
  return (
    <div className="app">
     <Header className="fix" />
      <Carrusel />
      <ContenBg />
      {<Cart />}
      <ContainerProducts sectionName={'promocion'} />
      <ContainerProducts sectionName={'menu'} />
      <Anuncio />
      <Footer />
       
     
      
    
    </div>
  );
};

export default Principal;

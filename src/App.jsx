import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carrusel from './components/Carrusel';
import Anuncio from './components/Anuncio';
import Footer from './components/Footer';
import { ContainerProducts } from './components/ContainerProducts/ContainerProducts';
import { Cart } from './components/Cart/Cart';
import { ContenBg } from './components/ContentBg/ContenBg';

const App = () => {
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

export default App;

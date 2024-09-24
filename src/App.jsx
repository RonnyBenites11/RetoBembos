import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carrusel from './components/Carrusel';
import Anuncio from './components/Anuncio';
import Footer from './components/Footer';
import { ContainerProducts } from './components/ContainerProducts/ContainerProducts';

const App = () => {
  return (
    <div className="app">
      <div className='fix'>
        <Header />
        <Navigation/>
      </div>
      <Carrusel />
      <ContainerProducts sectionName={'promocion'} />
      <ContainerProducts sectionName={'menu'} />
      <Anuncio />
      <Footer />
    </div>
  );
};

export default App;

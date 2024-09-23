import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carrusel from './components/Carrusel';
/*import { useState } from 'react';*/
import './App.css';
import { ContainerProducts } from './components/ContainerProducts/ContainerProducts';

export const App = () => {
  return (
    <div>
      <div className='fix'>    
      <Header />  
      <Navigation/>
      </div>
      <Carrusel/>
      <ContainerProducts sectionName={'promocion'} />
      <ContainerProducts sectionName={'menu'} />
    </div>
  );
};









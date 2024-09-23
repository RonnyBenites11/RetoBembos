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

import React from 'react';
import Header from './components/Header';
import './App.css';
import Navigation from './components/Navigation';
import Carrusel from './components/Carrusel';
import Anuncio from './components/Anuncio';
  


const App = () => {
  return (
    <div className="app">
      <div className='fix'>
      <div>
      <Header />
      </div>
      <div>
      <Navigation/>
      </div>
      </div>
      <Carrusel/>
      <div>
      <Anuncio/>
      </div>
      
    </div>
  );
};

export default App;


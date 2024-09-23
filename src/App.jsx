<<<<<<< HEAD
/*import { useState } from 'react';*/
import './App.css';
import { ContainerProducts } from './components/ContainerProducts/ContainerProducts';

export const App = () => {
  return (
    <div>
      <ContainerProducts sectionName={'promocion'} />
      <ContainerProducts sectionName={'menu'} />
    </div>
  );
};
=======
import React from 'react';
import Header from './components/Header';
import './App.css';
import Navigation from './components/Navigation';
import Carrusel from './components/Carrusel';



const App = () => {
  return (
    <div className="app">
      <div className='fix'>    
      <Header />  
      <Navigation/>
      </div>
      <Carrusel/>
     
      
    </div>
  );
};

export default App;
>>>>>>> c5b8febb6ab0324fabe3799c7a7ce3723db76fc3

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
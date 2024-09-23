import React from 'react';
import Header from './components/Header';
import './App.css';
import Navigation from './components/Navigation';
import Carrusel from './components/Carrusel';



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
     
      
    </div>
  );
};

export default App;
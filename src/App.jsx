import React from 'react';
import './App.css';
import Header from './components/Header';

import Carrusel from './components/Carrusel';
import Anuncio from './components/Anuncio';
import Footer from './components/Footer';
import { ContainerProducts } from './components/ContainerProducts/ContainerProducts';
import { Cart } from './components/Cart/Cart';
import { ContenBg } from './components/ContentBg/ContenBg';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Combo from './components/Combos/Combo/Combo';
import Menu from './components/Menu/Menu';
import NavigationSec from './components/Combos/NavigationSec';
import { Promociones } from './components/Promociones/Promociones';
import Principal from './components/Principal';
import Hamburguesa from './components/Combos/Hamburguesa/Hamburguesa.jsx';
import Pollo from './components/Combos/Pollo/Pollo.jsx';
import Loncherita from './components/Combos/Loncherita';
import Complementos from './components/Combos/Complementos';
import Bebidas from './components/Combos/Bebidas';
import Helados from './components/Combos/Helados';
import InkaChips from './components/Combos/Inkachips';
import Producto from './components/VerMas/Producto/Producto.jsx';






const App = () => {
  return (
    <BrowserRouter className="app">
      <Header/>
       <Navigation />
      
      <Routes>
      <Route path="/" element={<Principal />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/promociones" element={<Promociones  />} />
        <Route path="/hamburguesas" element={<Hamburguesa  />} />
        <Route path="/pollo" element={<Pollo  />} />
        <Route path="/loncheritas" element={<Loncherita  />} />
        <Route path="/complementos" element={<Complementos  />} />
        <Route path="/bebidas" element={<Bebidas  />} />
        <Route path="/helados" element={<Helados  />} />
        <Route path="/inka-chips" element={<InkaChips  />} />
        <Route path="/producto" element={<Producto  />} />
      </Routes>
      
    
    
    </BrowserRouter>
  );
};

export default App;

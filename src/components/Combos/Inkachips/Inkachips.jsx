import React, { useState } from 'react';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';

import Footer from '../../Footer';
import Producto from '../../VerMas/Producto/Producto';

const Inkachips = () => {
  const [selectedTipo, setSelectedTipo] = useState(null); // Estado para controlar si hay un tipo seleccionado

  const handleTipoSelect = (tipo) => {
    setSelectedTipo(tipo); // Actualiza el estado cuando se selecciona un producto
  };
  return (
    <div>
      <Header className="fix" />
      <Navigation />
      {!selectedTipo && (
        <> 
        <NavigationSec />
        
      </>
    )}
      <section className="hamburguesas">
          {!selectedTipo && <CombosBembos title="Descubre nuestras delicosas Inka chips | BEMBOS" />}
          <Producto tipoProducto="inka-chips" onSelectTipo={handleTipoSelect} />
        
          </section>
      
          {!selectedTipo && (
        <> 
     <AnuncioApp />
          <Footer />
          
        </>
      )}
    </div>
  );
};

export default Inkachips;

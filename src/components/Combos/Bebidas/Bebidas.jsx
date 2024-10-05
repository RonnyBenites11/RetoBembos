import React, { useState } from 'react';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';
import Footer from '../../Footer';
import Producto from '../../VerMas/Producto/Producto';

const Bebidas = () => {
  const [selectedTipo, setSelectedTipo] = useState(null); // Estado para controlar si hay un tipo seleccionado

  const handleTipoSelect = (tipo) => {
    setSelectedTipo(tipo); // Actualiza el estado cuando se selecciona un producto
  };

  return (
    <div>
      <Header className="fix" />
      <Navigation />
      <NavigationSec />
      
      <section className="hamburguesas">
      {/* Condición para ocultar CombosBembos si hay un tipo seleccionado */}
      <div className='menu-container'>
      {!selectedTipo && <CombosBembos title="Bebidas para refrescar tu día | BEMBOS" />}
      </div>
      

      {/* Componente Producto con la lógica para seleccionar tipo */}
      <Producto tipoProducto="bebidas" onSelectTipo={handleTipoSelect} />
      
      </section>
      
      {/* Ocultar el Footer y el AnuncioApp si hay un tipo de producto seleccionado */}
      {!selectedTipo && (
        <> 
          <AnuncioApp />
          <Footer />
        </>
      )}
      </div>
    
  );
};

export default Bebidas;

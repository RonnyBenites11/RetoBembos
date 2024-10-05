import React, { useState } from 'react';
import CombosBembos from '../CombosBembos';
import Footer from '../../Footer';
import NavigationSec from '../NavigationSec';
import Header from '../../Header';
import Producto from '../../VerMas/Producto/Producto';


const Combo = () => {
  const [selectedTipo, setSelectedTipo] = useState(null); // Estado para controlar si hay un tipo seleccionado

  const handleTipoSelect = (tipo) => {
    setSelectedTipo(tipo); // Actualiza el estado cuando se selecciona un producto
  };
  return (
    <div>
       <Header className="fix" />
       {!selectedTipo && (
        <> 
        <NavigationSec />
        
      </>
    )}
     <section className="hamburguesas">
          {!selectedTipo && <CombosBembos title="Conoce nuestros combos | BEMBOS" />}
          <Producto tipoProducto="combos" onSelectTipo={handleTipoSelect} />
          
            
          </section>
          {!selectedTipo && (
        <> 
      <Footer/>
      </>
      )}
    </div>
  );
};

export default Combo;
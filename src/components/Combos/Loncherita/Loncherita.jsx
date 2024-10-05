import React, { useState } from 'react';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Footer from '../../Footer';
import Producto from '../../VerMas/Producto/Producto';


const Loncherita = () => {
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
            {/* Condición para ocultar CombosBembos si hay un tipo seleccionado */}
      {!selectedTipo && <CombosBembos title="Descubre nuestras loncheras | BEMBOS" />}
      
    

      {/* Componente Producto con la lógica para seleccionar tipo */}
      <Producto tipoProducto="loncheritas" onSelectTipo={handleTipoSelect} />

            
            
           
          </section>
       
      
     
      {!selectedTipo && (
        <> 
        <div className="contenido">
              <div className="descripcion">
              
              <h2>LONCHERITAS DE BEMBOS</h2>
                <p>
                Las loncheritas infantiles son una opción ideal para los más chicos. Puedes pedir tu loncherita Bembos con hamburguesa o nuggets, y te incluye papas fritas y bebida.
                </p>
              </div>
            </div>
        <PreguntasFrecuentes className ="hamburguesas"
            title="PREGUNTAS FRECUENTES SOBRE LAS LONCHERITAS"
            faqData={[
          {
            question: '¿Hay delivery de Loncheritas Bembos?',
            answer: 'Sí, elige la loncherita de tu preferencia comprando por delivery online. Y disfruta de un pack con la mejor hamburguesa a la parrilla o nuggets. Incluye papas fritas y bebida.',
          },
          {
            question: '¿Qué productos tienen las loncheritas Bembos?',
            answer: 'Hay 3 alternativas: Loncherita Básica, Loncherita Nuggets y Loncherita básica de pollo. Todas incluyen papitas fritas, salsas exquisitas y una bebida a tu preferencia. Disfruta dnuestras famosas Loncheritas para tus niños.',
          },
          {
            question: '¿Qué son las loncheritas Bembos?',
            answer: 'Las Loncheritas de Bembos son una divertida opción para los pequeños. Elige tu pack favorito que incluye papitas fritas y bebida, tienes la opción de elegir alguna Hamburguesa a la parrilla o deliciosos nuggets.'
          }
         
        ]} />
          <AnuncioApp />
          <Footer />
          
        </>
      )}
    </div>
  );
};

export default Loncherita;

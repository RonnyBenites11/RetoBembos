import React, { useState } from 'react';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Footer from '../../Footer';
import Producto from '../../VerMas/Producto/Producto';


const Complementos = () => {
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
          {!selectedTipo && <CombosBembos title="Conoce nuestros deliciosos complementos | BEMBOS" />}
          <Producto tipoProducto="complementos" onSelectTipo={handleTipoSelect} />
            
           
          </section>
       
          {!selectedTipo && (
        <> 
      <PreguntasFrecuentes
            title="PREGUNTAS FRECUENTES SOBRE NUESTROS COMPLEMENTOS"
            faqData={[
          {
            question: '¿Puedo comprar más de un complemento Bembos?',
            answer: 'Sí, Podrás pedir tus papitas fritas bembos, chicken nuggets, chesse fingers y papas inka chips. Recuerda que para acceder al delivery debes considear un pedido como mínimo de S/12.90.',
          },
          {
            question: '¿Cuáles son los "complementos Bembos"?',
            answer: 'Los complementos Bembos que pueden ser pedidos son papas fritas, Chicken Nuggets y Cheese Fingers. Estas son un perfecto acompañamiento adicional para tus deliciosas hamburguesas a la parilla.',
          },
          {
            question: '¿Cuántos Cheese fingers vienen por pedido de Delivery Online?',
            answer: 'Los Cheese fingers cuentan con tres presentaciones, estás diferencias por cantidades o unidades, las cuales son:  x4, el x6 y el x9 unidades. Puedes añadir deliciosas cremas extras.'
          },
          {
            question: '¿Cuántos nuggets vienen en los complementos Bembos?',
            answer: ' Al realizar la compra de tus Chicken Nuggets podrás acceder al pedido de x6 o x9 unidades. Puedes añadir deliciosas cremas extras.'
          }
         
        ]} />
       <AnuncioApp />
          <Footer />
          
        </>
      )}
    </div>
  );
};

export default Complementos;

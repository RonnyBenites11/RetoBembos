import React from 'react';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Footer from '../../Footer';


const Complementos = () => {
  return (
    <div>
      <Header className="fix" />
      <Navigation />
      <NavigationSec />
      <CombosBembos
        apiUrl="http://localhost:3000/complementos"
        title="Conoce nuestros deliciosos complementos | BEMBOS"
        info={
          <section className="hamburguesas">
           
            
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
          </section>
        }
      />
      <div className='span'></div> 
      <AnuncioApp />
      <Footer/>
    </div>
  );
};

export default Complementos;

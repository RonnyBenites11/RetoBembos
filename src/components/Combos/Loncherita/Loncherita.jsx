import React from 'react';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Footer from '../../Footer';


const Loncherita = () => {
  return (
    <div>
      <Header className="fix" />
      <Navigation />
      <NavigationSec />
      <CombosBembos
        apiUrl="http://localhost:3000/loncheritas"
        title="Descubre nuestras loncheras | BEMBOS"
        info={
          <section className="hamburguesas">
           
            <div className="contenido">
              <div className="descripcion">
                <p>
                Las loncheritas infantiles son una opción ideal para los más chicos. Puedes pedir tu loncherita Bembos con hamburguesa o nuggets, y te incluye papas fritas y bebida.
                </p>
              </div>
            </div>
            <PreguntasFrecuentes
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
          </section>
        }
      />
      <div className='span'></div> 
      <AnuncioApp />
      <Footer/>
    </div>
  );
};

export default Loncherita;

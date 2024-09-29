import React from 'react';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';

import Footer from '../../Footer';

const Helados = () => {
  return (
    <div>
      <Header className="fix" />
      <Navigation />
      <NavigationSec />
      <CombosBembos
        apiUrl="http://localhost:3000/helados"
        title="Deliciosos helados para ti | BEMBOS"
        info={
          <section className="hamburguesas">
            <h2 className="titulo">POSTRES HELADOS</h2>
            <div className="contenido">
              <div className="descripcion">
                <p>
                Cualquier momento es ideal para un postre helado. Conoce las variedades que tenemos en Bembos.
                 Distintos sabores de helados, salsas y topping para que disfrutes. 
                ¡Puedes elegir el tuyo, pedirlo online y recibirlo en tu hogar!
                </p>
              </div>
            </div>
            <PreguntasFrecuentes faqData={[
          {
            question: '¿Qué adicionales puedo agregarle a mi helado Bembos?',
            answer: 'Podrás añadir hasta 9 toppings dulces, de chocolate o maní.  Elige el mejor complemente para tu helado Mini Princesa y Choco Vainilla.',
          },
          {
            question: '¿Puedo comprar mi postre de helados Bembos por Delivery?',
            answer: 'Sí, puedes elegir y pedir tus helados por Delivery Online. Tenemos para ti el helado Mini Princesa de Vainilla o Mixta y también el helado Choco Maní. Recuerda añadir tus toppings preferidos y disfrutar de este exquisito antojo.',
          },
          {
            question: '¿Qué sabores de helados Bembos existen?',
            answer: 'Existen dos tipos de helados en la tienda en línea de Bembos. Tenemos el Helado Mini Princesa que es un helado de vainilla o mixto con trozos de chocolate princesa y fudge de chocolate. Y también está el Choco Maní que está hecho con helado de vainilla y una delicios cobertura de chocolate derretido con maní picado.',
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

export default Helados;

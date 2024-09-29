import React from 'react';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';
import './Pollo.css';
import Footer from '../../Footer';

const Pollo = () => {
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
            <h2 className="titulo">LONCHERITAS de BEMBOS</h2>
            <div className="contenido">
              <div className="descripcion">
                <p>
                Las loncheritas infantiles son una opción ideal para los más chicos. Puedes pedir tu loncherita Bembos con hamburguesa o nuggets, y te incluye papas fritas y bebida.
                </p>
              </div>
            </div>
            <PreguntasFrecuentes faqData={[
          {
            question: '¿Cuántos puntos recibo por comprar sándwiches de pollo a la plarrilla o hamburguesa crispy de Bembos?',
            answer: 'crujiente sandwich de pollo Los puntos que se reciben por la compra del  varían entorno al tamaño de la misma, en proporción se otorga un punto por cada S/1. Conoce tus puntos desde la APP o ingresando en la Web.',
          },
          {
            question: '¿De qué están hechas la hamburguesa de pollo o hamburguesa broaster de Bembos?',
            answer: 'Las hamburguesas de pollo están hechas de carne de pollo, junto con las más exquisitos ingredientes peruanos. ¡Pídelo por Online delivery!,',
          },
          {
            question: '¿Los sandwiches de pollo a la parrilla de Bembos están acompañados de papas fritas?',
            answer: 'Sí, el Sandwich de pollo a la parrillaincluye distintos acompañamientos, podrás incluir: Huevo, Papas extras, Plátano, queso y Tocino. También puedes pedirlo únicamente solo sin acompañamiento.',
          },
          {
            question: '¿Qué adicionales tienen los sandwich de pollo a la parrilla de Bembos?',
            answer: 'Los adicionales que tienen las hamburguesas de pollo varían según elección del usuario. Entre estas tenemos añadir: Plátano, huevo, queso, tocino y papas al hilo extras. También añadir las más exquisitas salsas peruanas.',
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

export default Pollo;

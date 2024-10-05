import React, { useState } from 'react';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';
import './Pollo.css';
import Footer from '../../Footer';
import Producto from '../../VerMas/Producto/Producto';

const Pollo = () => {
  const [selectedTipo, setSelectedTipo] = useState(null); // Estado para controlar si hay un tipo seleccionado

  const handleTipoSelect = (tipo) => {
    setSelectedTipo(tipo); // Actualiza el estado cuando se selecciona un producto
  };
  return (
    <div>
      <Header className="fix" />
      <Navigation />
      <Navigation />
      {!selectedTipo && (
        <>
          <NavigationSec />
        </>
      )}

      <section className="hamburguesas">
        {!selectedTipo && <CombosBembos title="Descubre nuestro irresistible menú de pollo | BEMBOS" />}
        <Producto tipoProducto="pollo" onSelectTipo={handleTipoSelect} />
      </section>

      {!selectedTipo && (
        <>
          <div className="producto-description">
            <h2 className="titulo">SÁNDWICHES Y HAMBURGUESAS DE POLLO</h2>
            <div className="contenido">
              <div className="descripcion">
                <p className="descripcion-txt">
                  En Bembos no solamente tenemos hamburguesas de carne, también tenemos hamburguesas y sándwiches de
                  pollo broaster y grill. Tenemos las mejores combinaciones de ingredientes que hacen que nuestras
                  hamburguesas tengan un sabor irresistible. Pídelas por delivery web y empieza a disfrutar de lo mejor
                  en hamburguesas y sándwiches de Bembos.
                </p>
              </div>
            </div>
          </div>
          <PreguntasFrecuentes
            faqData={[
              {
                question:
                  '¿Cuántos puntos recibo por comprar sándwiches de pollo a la plarrilla o hamburguesa crispy de Bembos?',
                answer:
                  'crujiente sandwich de pollo Los puntos que se reciben por la compra del  varían entorno al tamaño de la misma, en proporción se otorga un punto por cada S/1. Conoce tus puntos desde la APP o ingresando en la Web.',
              },
              {
                question: '¿De qué están hechas la hamburguesa de pollo o hamburguesa broaster de Bembos?',
                answer:
                  'Las hamburguesas de pollo están hechas de carne de pollo, junto con las más exquisitos ingredientes peruanos. ¡Pídelo por Online delivery!,',
              },
              {
                question: '¿Los sandwiches de pollo a la parrilla de Bembos están acompañados de papas fritas?',
                answer:
                  'Sí, el Sandwich de pollo a la parrillaincluye distintos acompañamientos, podrás incluir: Huevo, Papas extras, Plátano, queso y Tocino. También puedes pedirlo únicamente solo sin acompañamiento.',
              },
              {
                question: '¿Qué adicionales tienen los sandwich de pollo a la parrilla de Bembos?',
                answer:
                  'Los adicionales que tienen las hamburguesas de pollo varían según elección del usuario. Entre estas tenemos añadir: Plátano, huevo, queso, tocino y papas al hilo extras. También añadir las más exquisitas salsas peruanas.',
              },
            ]}
          />
          <AnuncioApp />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Pollo;

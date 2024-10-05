import React, { useState } from 'react';
import Header from '../../Header';
import Navigation from '../../Navigation';
import NavigationSec from '../NavigationSec';
import CombosBembos from '../CombosBembos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import AnuncioApp from '../AnuncioApp';
import Footer from '../../Footer';
import Producto from '../../VerMas/Producto/Producto';

const Hamburguesa = () => {
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
        {!selectedTipo && <CombosBembos title="Descubre nuestras loncheras | BEMBOS" />}
        <Producto tipoProducto="hamburguesas" onSelectTipo={handleTipoSelect} />
        <h1>Hamburguesas a la parrilla</h1>
        <div className="contenido">
          <div className="descripcion">
            <p>
              Sabemos que la preparación de la carne de una hamburguesa es una de las partes más importantes. Por ello,
              Bembos te ofrece una técnica de cocción única en la que la mantenemos suspendida sobre el fuego para
              otorgarle la jugosidad perfecta que nos caracteriza. Combina tu hamburguesa de carne a la parrilla con los
              mejores ingredientes que hemos elegido para ti: tocino, plátano, tomate, lechuga, huevo, queso y mucho
              más. ¡No esperes más y empieza a disfrutar de lo mejor del sabor peruano!.
            </p>
          </div>
        </div>
      </section>

      {!selectedTipo && (
        <>
          <PreguntasFrecuentes
            title="PREGUNTAS FRECUENTES SOBRE NUESTRAS HAMBURGUESAS "
            faqData={[
              {
                question: '¿Cuántos puntos recibo por comprar una hamburguesa online delivery?',
                answer:
                  'Los puntos que se reciben por la compra de algún producto de nuestra carta de hamburguesas varían entorno al tamaño de la misma, en proporción se otorga un punto por cada S/1. Conoce tus puntos desde la APP o ingresando en la Web.',
              },
              {
                question: '¿De qué están hechas las hamburguesas a la parrilla de Bembos?',
                answer:
                  'Nuestras hamburguesas Bembos están hechas de carnes de res junto a los más exquisitos ingredientes peruanos.',
              },
              {
                question: '¿Las hamburguesas delivery de Bembos están acompañadas de papas fritas?',
                answer:
                  'Sí, puedes hacer tu pedido de hamburguesas online y podrás comprarlas únicamente solas o con papas fritas, incluso puedes pedirlo en combo (Papas + Gaseosa de 500ml).',
              },
              {
                question: '¿Qué adicionales tienen las hamburguesas a la parrilla de Bembos?',
                answer:
                  'Los adicionales que tiene nuestra carta de hamburguesas varían según la elección del usuario, entre estos tenemos: Plátano, huevo, queso, tocino, papas al hilo y las más exquisitas salsas peruanas.',
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
export default Hamburguesa;

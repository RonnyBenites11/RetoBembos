import React, { useState } from 'react';
import './PreguntasFrecuentes.css'; // Importa el archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const PreguntasFrecuentes = ({ faqData = [], title = 'Preguntas Frecuentes' }) => {
  // Preguntas por defecto si no se proporcionan
  const defaultFaqData = [
    {
      question: '¿Cuántos puntos recibo por comprar una hamburguesa online delivery?',
      answer: 'Los puntos que se reciben por la compra de algún producto de nuestra carta de hamburguesas varían entorno al tamaño de la misma, en proporción se otorga un punto por cada S/1. Conoce tus puntos desde la APP o ingresando en la Web.',
    },
    {
      question: '¿De qué están hechas las hamburguesas a la parrilla de Bembos?',
      answer: 'Nuestras hamburguesas Bembos están hechas de carnes de res junto a los más exquisitos ingredientes peruanos.',
    },
    {
      question: '¿Las hamburguesas delivery de Bembos están acompañadas de papas fritas?',
      answer: 'Sí, puedes hacer tu pedido de hamburguesas online y podrás comprarlas únicamente solas o con papas fritas, incluso puedes pedirlo en combo (Papas + Gaseosa de 500ml).',
    },
    {
      question: '¿Qué adicionales tienen las hamburguesas a la parrilla de Bembos?',
      answer: 'Los adicionales que tiene nuestra carta de hamburguesas varían según la elección del usuario, entre estos tenemos: Plátano, huevo, queso, tocino, papas al hilo y las más exquisitas salsas peruanas.',
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  // Usa faqData proporcionada o las preguntas por defecto
  const questionsToDisplay = faqData.length > 0 ? faqData : defaultFaqData;

  const toggleAnswer = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index) // Cierra el icono si ya está abierto
        : [...prevIndexes, index] // Agrega el nuevo índice
    );
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2 className="faq-title">{title}</h2> {/* Aquí se usa el título dinámico */}
      </div>
      <div className="faq-list">
        {questionsToDisplay.map((item, index) => (
          <div className={`faq-item ${openIndexes.includes(index) ? 'active' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h2>{item.question}</h2>
              <div className={`faq-icon-container ${openIndexes.includes(index) ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faChevronDown} className={openIndexes.includes(index) ? 'rotated' : ''} />
              </div>
            </div>
            <div className={`faq-answer ${openIndexes.includes(index) ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;

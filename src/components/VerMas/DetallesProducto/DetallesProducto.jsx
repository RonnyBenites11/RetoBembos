import React from 'react';
import { Link } from 'react-router-dom';

const DetallesProducto = ({ selectedTipo, productoData }) => {
  return (
    <div className="producto-info">
      <div className="producto-container">
        <div className="producto-left-container">
          <div className="producto-left-route">
            <Link to="/">Inicio</Link> &gt;
            <Link to="/menu">Menu</Link> &gt;
            <a href="#">{selectedTipo.nombre}</a>
          </div>
          <div className="producto-left-image">
            <img src={selectedTipo.img} alt={selectedTipo.nombre} />
          </div>
        </div>
        <div className="product-right-container">
          <div className="product-right-txt">
            <h1 className="product-right-title">{selectedTipo.nombre}</h1>
            <p className="product-right-description">
              Disfruta de una deliciosa Loncherita que incluye: Papa regular, frugos y un helado mini princesa.
            </p>
          </div>

          {/* Mostrar preguntas y combinaciones solo si existen */}
          {productoData.preguntas && productoData.preguntas.length > 0 ? (
            productoData.preguntas.map((pregunta) => (
              <div key={pregunta.nropregunta}>
                <div className="product-right-choose">
                  <div className="choose-title">
                    <span className="choose-number">{pregunta.nropregunta}</span>
                    <p className="choose-question">{pregunta.nombrepregunta}</p>
                  </div>
                  <img className="choose-img" src="/src/assets/img/down-arrow-product.svg" alt="" />
                </div>
                <div className="product-choose-chips">
                  {pregunta.combinaciones && pregunta.combinaciones.length > 0 ? (
                    pregunta.combinaciones.map((comb) => (
                      <div key={comb.nrocomb} className="combo-card">
                        <div className="combo-img">
                          <img src={comb.imgcomb} alt={comb.titulocomb} />
                        </div>
                        <p className="combo-title">{comb.titulocomb}</p>
                      </div>
                    ))
                  ) : (
                    <p>No hay combinaciones disponibles.</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No hay preguntas disponibles para este producto.</p>
          )}
        </div>
        
      </div>
      
    </div>
  );
};

export default DetallesProducto;

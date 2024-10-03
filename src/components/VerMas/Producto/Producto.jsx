import React, { useEffect, useState } from 'react';
import './Producto.css';
import Header from '../../Header';

const Producto = ({ tipoProducto }) => {
  const [productos, setProductos] = useState([]);
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`http://localhost:3000/${tipoProducto}`);
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error fetching productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [tipoProducto]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!productos.length) {
    return <div>No se encontraron productos.</div>;
  }

  const handleTipoClick = (tipo) => {
    setSelectedTipo(tipo);
  };

  return (
    <div>
      <Header />
      <div className="pedidoContainer">
        <div className="pedido-body">
          {/*  <div className="breadcrumb">
            <a href="#">Inicio</a> &gt;
            <a href="#">Menu</a> &gt;
            <a href="#">{tipoProducto}</a>
          </div>*/}

          {!selectedTipo ? (
            <div>
              <div className="pedido-title">Descubre nuestras loncheras | Bembos</div>
              <div className="tipos-container">
                {productos[0].tipos.map((tipo) => (
                  <div key={tipo.id} className="tipo-item" onClick={() => handleTipoClick(tipo)}>
                    <div className="tipo-item-img">
                      <img className="item-img-product" src={tipo.img} alt={tipo.nombre} />
                      <img className="item-img-fav" src="/src/assets/img/favorite.svg" alt="" />
                    </div>
                    <div className="tipo-item-info">
                      <p className="tipo-item-name">{tipo.nombre}</p>
                      <span className="tipo-item-price">S/. {tipo.precio.toFixed(2)}</span>
                      <a href="#" className="tipo-item-terms">
                        Terminos y Condiciones
                      </a>
                      <button className="tipo-item-btn">Ver más</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="producto-info">
              <div className="producto-container">
                <div className="producto-left-container">
                  <div className="producto-left-route">
                    <a href="#">Inicio</a> &gt;
                    <a href="#">Menu</a> &gt;
                    <a href="#">{tipoProducto}</a> &gt;
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
                      Disfruta de una deliciosa Loncherita de Nuggets a que incluye: Nuggets x4 , papa regular, frugos y
                      un helado mini princesa.
                    </p>
                  </div>
                  {/*<h2 className="producto-description">Precio: S/. {selectedTipo.precio}</h2>*/}

                  {productos[0].preguntas.map((pregunta) => (
                    <div key={pregunta.nropregunta}>
                      <div className="product-right-choose">
                        <div className="choose-title">
                          <span className="choose-number">{pregunta.nropregunta}</span>
                          <p className="choose-question">{pregunta.nombrepregunta}</p>
                        </div>
                        <img className="choose-img" src="/src/assets/img/down-arrow-product.svg" alt="" />
                      </div>
                      <div className="product-choose-chips">
                        {pregunta.combinaciones.map((comb) => (
                          <div key={comb.nrocomb} className="combo-card">
                            <div className="combo-img">
                              <img src={comb.imgcomb} alt={comb.titulocomb} />
                            </div>
                            <p className="combo-title">{comb.titulocomb}</p>
                            {/*<span className="item-price">+S/. {comb.preccomb.toFixed(2)}</span>*/}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Producto;

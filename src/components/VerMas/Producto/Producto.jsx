import React, { useEffect, useState } from 'react';
import './Producto.css';
import Header from '../../Header';
import DetallesProducto from '../DetallesProducto';

const Producto = ({ tipoProducto, onSelectTipo }) => {
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
    onSelectTipo(tipo); // Llamar a la función prop para actualizar el estado en el componente padre
  };

  return (
    <div>
      <div className="pedidoContainer">
        <div className="pedido-body">
          {!selectedTipo ? (
            <div className="tipos-container">
              {productos[0].tipos.map((tipo) => (
                <div key={tipo.link} className="tipo-item" onClick={() => handleTipoClick(tipo)}>
                  <div className="tipo-item-img">
                    <img className="item-img-product" src={tipo.img} alt={tipo.nombre} />
                    <img className="item-img-fav" src="/src/assets/img/favorite.svg" alt="" />
                  </div>
                  <div className="tipo-item-info">
                    <p className="tipo-item-name">{tipo.nombre}</p>
                    <span className="tipo-item-price">S/. {tipo.precio.toFixed(2)}</span>
                    <a href="#" className="tipo-item-terms">
                      Términos y Condiciones
                    </a>
                    <button className="tipo-item-btn" onClick={() => handleTipoClick(tipo)}>
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Llamamos al componente de detalle pasándole el tipo de producto seleccionado
            <DetallesProducto selectedTipo={selectedTipo} productoData={productos[0]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Producto;

import React, { useEffect, useState } from "react";
import "../VerMas.css";

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
        console.error("Error fetching productos:", error);
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
    <div className="pedidoContainer">
      <div className="breadcrumb">
        <a href="#">Inicio</a> &gt;
        <a href="#">Menu</a> &gt;
        <a href="#">{tipoProducto}</a>
      </div>

      {!selectedTipo ? (
        <div className="tipos-container">
          {productos[0].tipos.map((tipo) => (
            <div key={tipo.id} className="tipo-item" onClick={() => handleTipoClick(tipo)}>
              <h3>{tipo.nombre}</h3>
              <img src={tipo.img} alt={tipo.nombre} />
              <p>Precio: S/. {tipo.precio}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="producto-info">
          <div className="producto-container">
            <div className="producto-image">
              <img src={selectedTipo.img} alt={selectedTipo.nombre} />
            </div>
            <div className="product-details">
              <h1 className="producto-title">
                <strong>{selectedTipo.nombre}</strong>
              </h1>
              <h2 className="producto-description">
                Precio: S/. {selectedTipo.precio}
              </h2>

              {productos[0].preguntas.map((pregunta) => (
                <div key={pregunta.nropregunta}>
                  <div className="chips-header">
                    <span className="chips-header-number">{pregunta.nropregunta}</span>
                    <p className="chips-header-text">{pregunta.nombrepregunta}</p>
                    <span className="toggle-icon">▼</span>
                  </div>
                  <div className="chipsContainer">
                    {pregunta.combinaciones.map((comb) => (
                      <div key={comb.nrocomb} className="comb-container">
                        <p>{comb.titulocomb}</p>
                        <img src={comb.imgcomb} alt={comb.titulocomb} />
                        <span className="item-price">+S/. {comb.preccomb.toFixed(2)}</span>
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
  );
};

export default Producto;

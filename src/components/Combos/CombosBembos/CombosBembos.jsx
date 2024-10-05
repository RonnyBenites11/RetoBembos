import React, { useEffect, useState } from 'react';
import './CombosBembos.css';

const CombosBembos = ({ apiUrl, title, info }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(apiUrl); // Usar la URL pasada como prop
        const data = await response.json();

        // Aquí asumimos que 'tipos' y 'preguntas' son parte de la estructura de datos.
        if (data.length > 0) {
          const [menuData] = data;
          setItems(menuData.tipos); // Ajusta para usar la sección 'tipos'
          // Ajusta para usar la sección 'preguntas'
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [apiUrl]);

  return (
    <div className="combo-menu-container">
      <div className="detail-info">
        <h1>{title}</h1>
        <div className="menu-items">
          {items.map((item) => (
            <div className="menu-item" key={item.id} id={`item-${item.link}`}>
              <div className="item-card">
                <div className="item-image">
                  <img className="item-image-img" src={item.img} alt={item.nombre} loading="lazy" />
                  <img
                    className="icon"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC45MTkiIGhlaWdodD0iMTcuNjM5IiB2aWV3Qm94PSIwIDAgMTguOTE5IDE3LjYzOSI+PHBhdGggZD0iTTE3NTAuMTIyLDgzOC4wMTRzOC40Ni02LjE1Miw4LjQ2LTEwLjcxYzAtNS4yNTgtNi45MjItNi45MjItOC40Ni0uNTI1LTEuNTM4LTYuNC04LjQ2LTQuNzMzLTguNDYuNTI1QzE3NDEuNjYyLDgzMS44NjIsMTc1MC4xMjIsODM4LjAxNCwxNzUwLjEyMiw4MzguMDE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3NDAuNjYyIC04MjEuNjEyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4="
                    alt="Favorite"
                  />
                </div>
                <div className="item-details">
                  <a href={`${item.link}`}>
                    <h4>{item.nombre}</h4>
                  </a>
                  <p className="price">S/. {item.precio.toFixed(2)}</p>
                  <div className="terms">
                    <a href="/terms" className="terms-link">
                      Términos y Condiciones
                    </a>
                  </div>
                  <button className="more-button">Ver más</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Renderizar preguntas */}

        {<section>{info}</section>}
      </div>
    </div>
  );
};

export default CombosBembos;

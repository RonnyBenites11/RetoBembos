import React, { useEffect, useState } from 'react';
import './CombosBembos.css';
const CombosBembos = () => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const response = await fetch('http://localhost:3000/combos'); // Adjust URL if necessary
        const data = await response.json();
        setCombos(data);
      } catch (error) {
        console.error('Error fetching combos:', error);
      }
    };

    fetchCombos();
  }, []);

  return (
    
    <div className='menu-container'>
    <div  className="detail-info">
    <h1 >Conoce nuestros combos | BEMBOS</h1>
    <div className="menu-items">
   
      {combos.map(combo => (
        <div className="menu-item" key={combo.id} id={`combo-${combo.link}`}>
          <div className="item-card">
            <span className="icon">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC45MTkiIGhlaWdodD0iMTcuNjM5IiB2aWV3Qm94PSIwIDAgMTguOTE5IDE3LjYzOSI+PHBhdGggZD0iTTE3NTAuMTIyLDgzOC4wMTRzOC40Ni02LjE1Miw4LjQ2LTEwLjcxYzAtNS4yNTgtNi45MjItNi45MjItOC40Ni0uNTI1LTEuNTM4LTYuNC04LjQ2LTQuNzMzLTguNDYuNTI1QzE3NDEuNjYyLDgzMS44NjIsMTc1MC4xMjIsODM4LjAxNCwxNzUwLjEyMiw4MzguMDE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3NDAuNjYyIC04MjEuNjEyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4="
                alt="Bembos Favorite"
              />
            </span>
            <div className="item-image">
              <img
                src={combo.img}
                alt={combo.nombre}
                loading="lazy"
              />
            </div>
            <div className="item-details">
              <a href={`${combo.link}`}>
                <h4>{combo.nombre}</h4>
              </a>
              <p className="price">S/. {combo.precio}</p>
              <div className="terms">
                <a href="/terms" className="terms-link">Términos y Condiciones</a>
              </div>
              <button className="more-button">Ver más</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default CombosBembos;
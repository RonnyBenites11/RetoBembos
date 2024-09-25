import React, { useEffect, useState } from 'react';
import './Categorias.css'; // Import the CSS file

const Categorias = () => {
    const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/menu'); // Endpoint para los elementos del menú
        const data = await response.json();
        setMenuItems(data); // Establece los datos obtenidos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="promo-container">
      <div className="promo-wrapper">
        {menuItems.map(item => (
          <div className="promo-image-wrapper" key={item.id}>
            <img 
              src={item.img} 
              alt={item.nombre} 
              loading="lazy" 
              className="promo-image"
            />
            <div className="promo-text">{item.nombre}</div>
            <div className="promo-button-wrapper">
        <button className="promo-button">Ver todos</button>
      </div>
          </div>
          
        ))}
      </div>
     
    </div>
  );
};

export default Categorias;
import React, { useEffect, useState } from 'react';
import './Categorias.css'; // Importa el archivo CSS

const Categorias = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/menu'); // Endpoint para los elementos del menú
        const data = await response.json();

        // Accede correctamente al arreglo 'tipos' dentro de 'menu'
        if (data && data.length > 0 && data[0].tipos) {
          setMenuItems(data[0].tipos); // Accede a 'tipos' dentro de 'menu'
        } else {
          console.error('Estructura de datos inesperada');
        }
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

import './CardMenu.css';
import '../CardPromocion/CardPromocion.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const CardMenu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const readMenu = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/menu');
        // Asumiendo que la estructura es: [{ tipos: [...] }]
        setMenuData(data[0]?.tipos || []); // Accedemos a tipos y usamos un array vacío como fallback
        console.log(data[0]?.tipos); // Muestra los tipos en la consola
      } catch (error) {
        console.log(error);
      }
    };
    readMenu();
  }, []);

  return (
    <div className="card-menu-container">
      {menuData.map((menu, index) => (
        <div className="card" key={menu.id}> {/* Cambié el key a menu.id para ser único */}
          <div className="card-img">
            <img src={menu.img} alt={menu.nombre} /> {/* Mejora en el atributo alt */}
          </div>
          <div className="card-info">
            <h3 className="card-name">{menu.nombre}</h3>
            <button className="card-btn" onClick={() => (window.location.href = menu.link)}>
              Ver Todos
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


/*const menuBtns = document.querySelectorAll('.card-btn');
      menuBtns.forEach((btn) => {
        btn.addEventListener('click', (window.location.href = `${menu.link}`));
      });*/

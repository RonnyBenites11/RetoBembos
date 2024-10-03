import React, { useEffect, useState } from 'react';
import './NavigationSec.css'; 
import { Link } from 'react-router-dom'; // Importamos el Link de react-router-dom

const NavigationSec = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0); 
  
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
  
    const handleClick = (index) => {
      setActiveIndex(index);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const categories = [
      { name: 'Combos', path: '/combo' },
      { name: 'Hamburguesas', path: '/hamburguesas' },
      { name: 'Pollo', path: '/pollo' },
      { name: 'Loncheritas', path: '/loncheritas' },
      { name: 'Complementos', path: '/complementos' },
      { name: 'Bebidas', path: '/bebidas' },
      { name: 'Helados', path: '/helados' },
      { name: 'Inka Chips', path: '/inka-chips' },
    ];
  
    return (
      <ul id="menu-categories" className={scrolled ? 'scrolled' : ''}>
        {categories.map((category, index) => (
          <div key={index}>
            <li
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleClick(index)} // Manejar clic
            >
              <Link to={category.path}>{category.name}</Link> {/* Cambiamos a Link */}
            </li>
          </div>
        ))}
      </ul>
    );
  };
  
  export default NavigationSec;
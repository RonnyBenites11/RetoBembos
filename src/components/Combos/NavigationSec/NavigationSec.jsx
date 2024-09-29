import React, { useEffect, useState } from 'react';
import './NavigationSec.css'; 

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
      'Combos',
      'Hamburguesas',
      'Pollo',
      'Loncheritas',
      'Complementos',
      'Bebidas',
      'Helados',
      'Inka Chips',
    ];
  
    return (
      <ul id="menu-categories" className={scrolled ? 'scrolled' : ''}>
        {categories.map((category, index) => (
          <div key={index}>
            <li
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleClick(index)} // Manejar clic 
            >
              <a>{category}</a>
            </li>
          </div>
        ))}
      </ul>
    );
  };
  
  export default NavigationSec;
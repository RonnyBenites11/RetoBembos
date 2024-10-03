import React from 'react';
import CombosBembos from '../CombosBembos';
import Footer from '../../Footer';
import NavigationSec from '../NavigationSec';


const Combo = () => {
  return (
    <div>
      <NavigationSec/>
      <CombosBembos 
        apiUrl="http://localhost:3000/combos" 
        title="Conoce nuestros combos | BEMBOS"
      />
      <Footer/>
    </div>
  );
};

export default Combo;
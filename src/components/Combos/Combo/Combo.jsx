import React from 'react';
import CombosBembos from '../CombosBembos';


const Combo = () => {
  return (
    <div>
      <CombosBembos 
        apiUrl="http://localhost:3000/combos" 
        title="Conoce nuestros combos | BEMBOS"
      />
    </div>
  );
};

export default Combo;
import React from 'react';
import CombosBembos from '../CombosBembos';
import './Hamburguesa.css';


const Hamburguesa = () => {
  return (
    <div>
      <CombosBembos 
        apiUrl="http://localhost:3000/hamburguesas" 
        title="Explora nuestras hamburguesas | BEMBOS" 
        info={<seection className="hamburguesas">
            <h2 className="titulo">Hamburguesas a la parrilla</h2>
            <div className="contenido">
                <div className="descripcion">
                    <p>
                Sabemos que la preparación de la carne de una hamburguesa es una de las partes más importantes. 
                Por ello, Bembos te ofrece una técnica de cocción única en la que la mantenemos suspendida sobre el fuego para otorgarle la jugosidad perfecta que nos caracteriza. 
                Combina tu hamburguesa de carne a la parrilla con los mejores ingredientes que hemos elegido para ti: tocino, plátano, tomate, lechuga, huevo, queso y mucho más.
                 ¡No esperes más y empieza a disfrutar de lo mejor del sabor peruano!
                 </p>
                </div>
            </div>
            </seection>}
        >
            
        </CombosBembos>
        
        
        
       
      
      
      
    </div>
  );
};

export default Hamburguesa;
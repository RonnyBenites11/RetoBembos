import { useState } from "react";
import { Cart } from "../Cart/Cart";
import DetallesProducto from "../VerMas/DetallesProducto";

const Detalles = () => {
    const [carrito, setCarrito] = useState([]);
  
    const abrirCarrito = (producto, cantidad, precioTotal) => {
      setCarrito((prevCarrito) => [...prevCarrito, { ...producto, cantidad, precioTotal }]);
    };
  
    return (
      <div>
        <DetallesProducto abrirCarrito={abrirCarrito} />
        <Cart visible={true} carrito={carrito} onClose={() => {}} />
      </div>
    );
  };
  export default Detalles;
  
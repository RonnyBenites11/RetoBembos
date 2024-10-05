import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Carrusel from './components/Carrusel';
import Anuncio from './components/Anuncio';
import Footer from './components/Footer';
import { ContainerProducts } from './components/ContainerProducts/ContainerProducts';
import { Cart } from './components/Cart/Cart';
import { ContenBg } from './components/ContentBg/ContenBg';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Combo from './components/Combos/Combo/Combo';
import Menu from './components/Menu/Menu';
import NavigationSec from './components/Combos/NavigationSec';
import { Promociones } from './components/Promociones/Promociones';
import Principal from './components/Principal';
import Hamburguesa from './components/Combos/Hamburguesa/Hamburguesa.jsx';
import Pollo from './components/Combos/Pollo/Pollo.jsx';
import Loncherita from './components/Combos/Loncherita';
import Complementos from './components/Combos/Complementos';
import Bebidas from './components/Combos/Bebidas';
import Helados from './components/Combos/Helados';
import InkaChips from './components/Combos/Inkachips';
import Producto from './components/VerMas/Producto/Producto.jsx';
import DetallesProducto from './components/VerMas/DetallesProducto/DetallesProducto.jsx';

// Componente para obtener el producto basado en el ID
const DetallesProductoWrapper = ({ abrirCarrito }) => {
  const { id } = useParams(); // Obtiene el ID del producto de la URL
  const [productoData, setProductoData] = useState(null); // Estado para los datos del producto

  useEffect(() => {
    // Función para simular la obtención de datos de un producto (esto puede ser una llamada a una API)
    const fetchProductoData = async () => {
      // Simulación de la obtención de datos de producto
      const response = await fetch(`/api/productos/${id}`); // Cambia la URL según tu API
      const data = await response.json();
      setProductoData(data);
    };
    
    fetchProductoData();
  }, [id]);

  if (!productoData) return <div>Cargando...</div>; // Muestra un cargando mientras se obtienen los datos

  return <DetallesProducto selectedTipo={productoData} abrirCarrito={abrirCarrito} />;
};

const App = () => {
  const [carrito, setCarrito] = useState([]);
  const [isCarritoAbierto, setIsCarritoAbierto] = useState(false);
  
  const abrirCarrito = (producto, cantidad, precio) => {
    setCarrito(prev => [...prev, { ...producto, cantidad, precio }]);
    setIsCarritoAbierto(true);
  };

  const cerrarCarrito = () => {
    setIsCarritoAbierto(false);
  };

  return (
    <BrowserRouter className="app">
      {isCarritoAbierto && (
        <Cart 
          carrito={carrito}
          cerrarCarrito={cerrarCarrito}
        />
      )}
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/hamburguesas" element={<Hamburguesa />} />
        <Route path="/pollo" element={<Pollo />} />
        <Route path="/loncheritas" element={<Loncherita />} />
        <Route path="/complementos" element={<Complementos />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/helados" element={<Helados />} />
        <Route path="/inka-chips" element={<InkaChips />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/producto/:id" element={<DetallesProductoWrapper abrirCarrito={abrirCarrito} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

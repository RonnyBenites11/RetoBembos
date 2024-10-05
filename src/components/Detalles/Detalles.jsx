// DetallesProductoWrapper.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetallesProducto from '../VerMas/DetallesProducto';


const Detalles = ({ abrirCarrito }) => {
  const { id } = useParams();
  const [productoData, setProductoData] = useState(null);

  useEffect(() => {
    const fetchProductoData = async () => {
      const response = await fetch(`/api/productos/${id}`);
      const data = await response.json();
      setProductoData(data);
    };

    fetchProductoData();
  }, [id]);

  if (!productoData) return <div>Cargando...</div>;

  return <DetallesProducto selectedTipo={productoData} abrirCarrito={abrirCarrito} />;
};

export default Detalles;

import React, { useEffect, useState } from "react";
import "./VerMas.css";
const Helados = () => {
  const [Helados, setHelados] = useState([]);
  useEffect(() => {
    const fetchHelados = async () => {
      try {
        const response = await fetch("http://localhost:3000/helados"); // Adjust URL if necessary
        const data = await response.json();
        setHelados(data);
      } catch (error) {
        console.error("Error fetching helados:", error);
      }
    };

    fetchHelados();
  }, []);

  return (
    
    <div className="main-container">
      <div class="breadcrumb">
      
      <a href="#">Inicio</a> &gt; 
      <a href="#">Menú</a> &gt; 
      <a href="#">Helados</a> &gt; 
      <a href="#">Helado Mini Princesa</a>
    
   
  </div>

 <form className="product-info">
    <div className="product-container">
    <div class="product-image">
          <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-mini-princesa-2024.webp" alt="Helado" />
        </div>
        <div className="product-details">
        <h1 class="product-title"><strong>Helado Mini Princesa</strong></h1>
        <h2 class="product-description">

            Helado Mini Princesa

          </h2>
        </div>
    </div>

    </form>


    </div>
  );
};

export default Helados;

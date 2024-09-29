import React, { useEffect, useState } from "react";

const Bebidas = () => {
  const [bebidas, setBebidas] = useState([]);
  useEffect(() => {
    const fetchBebidas = async () => {
      try {
        const response = await fetch("http://localhost:3000/bebidas"); // Adjust URL if necessary
        const data = await response.json();
        setBebidas(data);
      } catch (error) {
        console.error("Error fetching bebidas:", error);
      }
    };

    fetchBebidas();
  }, []);

  return (
   <div className="main-container">
    <div class="breadcrumb">
      
      <a href="#">Inicio</a> &gt; 
      <a href="#">Menú</a> &gt; 
      <a href="#">Bebidas</a> &gt; 
      <a href="#">Agua San Luis S/G</a>
    
  </div>
  <form class="product-info" autocomplete="off">
      
      <div class="product-container">
        <div class="product-image">
          <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/a/g/agua-san-luis.webp" alt="Agua San Luis S/G"/>
        </div>
        <div class="product-details">
          <h1 class="product-title"><strong>Agua San Luis S/G</strong></h1>
          <h2 class="product-description">Si quieres un combo más saludable Bembos te da la opción de agregar como bebida el Agua mineral San Luis de 625 ml.</h2>
         
        </div>
      </div>


    </form>

    <div class="footer">
        <div class="footer-container">
          <div class="quantity-section">
            <p class="quantity-label">Cantidad</p>
            <button class="quantity-button">-</button>
            <span class="quantity-display">1</span>
            <button class="quantity-button">+</button>
          </div>
          <div class="points-section">
            <p class="points-text">ACUMULAS 0Pts</p>
            <div class="add-button-container">
              <button class="add-button">AGREGAR S/. 4.90</button>
            </div>  
          </div>
        </div>
      </div>
   </div>
  );
};

export default Bebidas;

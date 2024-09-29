import React, { useEffect, useState } from "react";
import "./VerMas.css";
const Pollo = () => {
  const [Pollo, setPollo] = useState([]);
  useEffect(() => {
    const fetchPollo = async () => {
      try {
        const response = await fetch("http://localhost:3000/pollo"); // Adjust URL if necessary
        const data = await response.json();
        setPollo(data);
      } catch (error) {
        console.error("Error fetching Pollo:", error);
      }
    };

    fetchPollo();
  }, []);

  return (
    <div className="pedidoContainer">
      <div class="breadcrumb">
        <a href="#">Inicio</a> &gt;
        <a href="#">Menu</a> &gt;
        <a href="#">Hamburguesas</a> &gt;
        <a href="#">Hamburguesa La Patriota</a>
      </div>

      <div className="producto-info">
        <div className="producto-container">
          <div class="producto-image">
            <img
              src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/chicken-girll.webp"
              alt="Hamburguesa La Patriota"
            />
          </div>
          <div className="product-details">
            <h1 class="producto-title">
              <strong>Sandwich Pollo a la Parrilla</strong>
            </h1>
            <h2 class="producto-description">
              Delicioso{" "}
              <strong>Sandwich de Pechuga de pollo a la parrilla</strong>
              <br />
              <br />
              Entre sus ingredientes encontramos:
              <br />
              <br />
              - Pollo marinado a la parrilla
              <br />
              - Lechuga
              <br />
              - Tomate
              <br />
              - Mayonesa
              <br />
              <br />
              Mayonesa x1, Ketchup x1, Ají Bembos x1
              <br />
              <br />
              Podrás escogerla en tamaño mediana o grande.
            </h2>

            <div class="chips-header" onclick="toggleChipsContainer()">
              <span class="chips-header-number">1</span>
              <p class="chips-header-text">
                {" "}
                Elige el Tamaño de tu Hamburguesa
              </p>
              <span class="toggle-icon">▼</span>
            </div>

            <div id="chipsContainer" class="chipsContainer">
              <select class="hidden-select" name="" id="">
                <option value="19140">19140</option>
                <option value="19141">19141</option>
              </select>

              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/b/e/bembos-chicken-grill_1_1_1_1.png"
                      width="72"
                      height="72"
                      alt="Papa Inka Chips 33 gr"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>La Patriota Mediana + S/. 0.00</p>
                </div>
              </button>
            </div>

            <div class="extra-header open" onclick="toggleExtraContainer()">
              <span class="extra-header-number">2</span>
              <p class="extra-header-text">¿Desea algún extra?</p>
              <span class="toggle-icon">▼</span>
            </div>
            
            <div className="quitar">
              <button class="custom-button">QUITAR</button>
              <div class="item-container">
                <div class="items">
                  <div class="item">
                    <input
                      type="checkbox"
                      id="agregar_input_mayonesa"
                      value="[object Object]"
                      class="hidden-checkbox"
                    />
                    <div class="image-container">
                      <img
                        src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/m/a/mayonesa_2.jpg"
                        width="68"
                        height="68"
                        alt="Mayonesa"
                        loading="lazy"
                      />
                    </div>
                    <p class="item-name">Mayonesa</p>
                    <span class="item-price">+S/. 0.00</span>
                  </div>

                  <div class="item">
                    <input
                      type="checkbox"
                      id="agregar_input_ketchup"
                      value="[object Object]"
                      class="hidden-checkbox"
                    />
                    <div class="image-container">
                      <img
                        src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/l/e/lechuga_1.jpg"
                        width="68"
                        height="68"
                        alt="Ketchup"
                        loading="lazy"
                      />
                    </div>
                    <p class="item-name">Lechuga</p>
                    <span class="item-price">+S/. 0.00</span>
                  </div>

                  <div class="item">
                    <input
                      type="checkbox"
                      id="agregar_input_aji"
                      value="[object Object]"
                      class="hidden-checkbox"
                    />
                    <div class="image-container">
                      <img
                        src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/t/o/tomate_1.jpg"
                        width="68"
                        height="68"
                        alt="Aji"
                        loading="lazy"
                      />
                    </div>
                    <p class="item-name">Tomate</p>
                    <span class="item-price">+S/. 0.00</span>



                    

                  </div>
                </div>
              </div>
            </div>

            <div className="agregar">
              <button class="custom-button">AGREGAR</button>
              <div class="item-container">
                <div class="items">
                  <div class="item">
                    <input
                      type="checkbox"
                      id="agregar_input_mayonesa"
                      value="[object Object]"
                      class="hidden-checkbox"
                    />
                    <div class="image-container">
                      <img
                        src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/u/huevo_extra_1.jpg"
                        width="68"
                        height="68"
                        alt="Mayonesa"
                        loading="lazy"
                      />
                    </div>
                    <p class="item-name">Mayonesa</p>
                    <span class="item-price">+S/. 0.00</span>
                  </div>

                  <div class="item">
                    <input
                      type="checkbox"
                      id="agregar_input_ketchup"
                      value="[object Object]"
                      class="hidden-checkbox"
                    />
                    <div class="image-container">
                      <img
                        src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/a/papas_al_hilo_extra_1.jpg"
                        width="68"
                        height="68"
                        alt="Ketchup"
                        loading="lazy"
                      />
                    </div>
                    <p class="item-name">Lechuga</p>
                    <span class="item-price">+S/. 0.00</span>
                  </div>

                  <div class="item">
                    <input
                      type="checkbox"
                      id="agregar_input_aji"
                      value="[object Object]"
                      class="hidden-checkbox"
                    />
                    <div class="image-container">
                      <img
                        src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/l/platano_frito_1.jpg"
                        width="68"
                        height="68"
                        alt="Aji"
                        loading="lazy"
                      />
                    </div>
                    <p class="item-name">Tomate</p>
                    <span class="item-price">+S/. 0.00</span>
                  </div>

                  <div class="item">
                    <input
                      type="checkbox"
                      id="agregar_input_aji"
                      value="[object Object]"
                      class="hidden-checkbox"
                    />
                    <div class="image-container">
                      <img
                        src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/q/u/queso_medium_extra_1.jpg"
                        width="68"
                        height="68"
                        alt="Aji"
                        loading="lazy"
                      />
                    </div>
                    <p class="item-name">Tomate</p>
                    <span class="item-price">+S/. 0.00</span>
                  </div>

                  <div class="item">
                    <input
                      type="checkbox"
                      id="agregar_input_aji"
                      value="[object Object]"
                      class="hidden-checkbox"
                    />
                    <div class="image-container">
                      <img
                        src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/t/o/tocino_extra_1.jpg"
                        width="68"
                        height="68"
                        alt="Aji"
                        loading="lazy"
                      />
                    </div>
                    <p class="item-name">Tomate</p>
                    <span class="item-price">+S/. 0.00</span>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div class="salsaFav-header" onclick="toggleSalsaFavContainer()">
    <span class="salsaFav-header-number">3</span>
    <p class="salsaFav-header-text">Elige Tus Salsas Favoritas</p>
    <span class="toggle-icon">▼</span>
  </div>
          </div>
        </div>
      </div>
   
  );
};

export default Pollo;

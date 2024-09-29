import React, { useEffect, useState } from "react";
import "./VerMas.css";
const Hamburguesas = () => {
  const [Hamburguesas, setHamburguesas] = useState([]);
  useEffect(() => {
    const fetchHamburguesas = async () => {
      try {
        const response = await fetch("http://localhost:3000/hamburguesas"); // Adjust URL if necessary
        const data = await response.json();
        setHamburguesas(data);
      } catch (error) {
        console.error("Error fetching hamburguesas:", error);
      }
    };

    fetchHamburguesas();
  }, []);

  return (
    <div className="pedidoContainer">
      <div class="breadcrumb">
        <a href="#">Inicio</a> &gt; <a href="#">Menu</a> &gt;
        <a href="#">Hamburguesas</a> &gt;
        <a href="#">Hamburguesa La Patriota</a>
      </div>

      <div className="producto-container">
        <div class="producto-image">
          <img
            src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-la-patriota-hamburguesa.webp"
            alt="Hamburguesa La Patriota"
          />
        </div>
        <div className="producto-details">
          <h1 class="producto-title">
            <strong>Hamburguesa La Patriota</strong>
          </h1>
          <h2 class="producto-description">
            Hamburguesa a la parrilla, salsa de lomito al jugo, papas fritas,
            huevo, tomate, lechuga.
          </h2>

          <div class="chips-header" onclick="toggleChipsContainer()">
            <span class="chips-header-number">1</span>
            <p class="chips-header-text">Elige tu hamburguesa patriota</p>
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
                    src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-la-patriota-hamburguesa-blanco_1_1.png"
                    alt=""
                  />
                </span>
              </div>
              <div class="product-description">
                <p>La Patriota Mediana + S/. 0.00</p>
              </div>
            </button>

            <button class="product-button">
              <div class="product-image-container bordered">
                <span class="product-image">
                  <img
                    src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-la-patriota-hamburguesa-blanco_1_1.png "
                    alt=""
                  />
                </span>
              </div>
              <div class="product-description">
                <p>La Patriota Grande + S/. 3.00</p>
              </div>
            </button>
          </div>

          <div class="extra-header" onclick="toggleExtraContainer()">
            <span class="extra-header-number">2</span>
            <p class="extra-header-text">¿Desea algún extra?</p>
            <span class="toggle-icon">▼</span>
          </div>

          <div id="extraContainer" class="extraContainer">
            <select class="hidden-select" name="" id="">
              <option value="19140">19140</option>
              <option value="19141">19141</option>
            </select>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/coca-cola-sabor-original_1.webp"
                      width="72"
                      height="72"
                      alt="Coca Cola Sabor Original"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>Coca Cola Sabor Original 500 ml + S/.5.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/coca-cola-sin-azucar_1_1.webp"
                      width="72"
                      height="72"
                      alt="Coca Cola Sin Azucar"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>Coca Cola Sin Azúcar 500 ml + S/.5.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/i/n/incakola-sabor-original_1.webp"
                      width="72"
                      height="72"
                      alt="Inca Kola Sabor Original"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>Inca Kola Sabor Original 500 ml + S/.5.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/i/n/inca-kola-sin-azucar_1_1.png"
                      width="72"
                      height="72"
                      alt="Inca Kola Sabor Original"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>Inca Kola Sabor Sin Azucar 500 ml + S/.5.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/s/a/san-luis-sin-gas_2_1_1.png"
                      width="72"
                      height="72"
                      alt="San Luis Sin Gas"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>San Luis Sin Gas 625 ml + S/.4.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/s/p/sprite-con-azucar_2.png"
                      width="72"
                      height="72"
                      alt="Sprite Sabor Original"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>Sprite Sabor Original 500 ml + S/.5.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/f/a/fanta-con-azucar_3_2.png"
                      width="72"
                      height="72"
                      alt="Fanta Sabor Original"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>Fanta Sabor Original 500 ml + S/.5.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/a/papas-fritas_1_4_2_1.png"
                      width="72"
                      height="72"
                      alt="Papa Mediana"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>Papa Mediana + S/.5.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/a/papas-grande_3.jpg"
                      width="72"
                      height="72"
                      alt="Papa Grande"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="Papa Grande">
                  <p>Papa Grande + S/.6.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/n/u/nuggets-nuevo.png"
                      width="72"
                      height="72"
                      alt="6 Nuggets"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>6 Nuggets + S/.12.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>

            <div class="product-item">
              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img
                      src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/n/u/nuggets-nuevo.png"
                      width="72"
                      height="72"
                      alt="4 Cheese Fingers"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="product-description">
                  <p>4 Cheese Fingers + S/.12.90</p>
                </div>
              </button>
              <div class="quantity-controls">
                <button class="minus-btn">−</button>
                <span class="quantity">0</span>
                <button class="plus-btn">+</button>
              </div>
            </div>
          </div>

          <div class="salsaFav-header" onclick="toggleSalsaFavContainer()">
              <span class="salsaFav-header-number">3</span>
              <p class="salsaFav-header-text">Elige Tus Salsas Favoritas</p>
              <span class="toggle-icon">▼</span>
          </div>

          <div id="salsaFavContainer" class="salsaFavContainer hidden">
              <select class="hidden-select" name="" id="">
                <option value="19140">19140</option>
                <option value="19141">19141</option>
              </select>

              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/m/a/mayonesa_3_2.webp" width="72" height="72" alt="Mayonesa" loading="lazy"/>
                  </span>
                </div>
                <div class="product-description">
                  <p>Mayonesa</p>
                </div>
              </button>

              <button class="product-button">
                <div class="product-image-container bordered">
                  <span class="product-image">
                    <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/k/e/ketchup_2.webp" width="72" height="72" alt="Ketchup" loading="lazy"/>
                  </span>
                </div>
                <div class="product-description">
                  <p>Ketchup</p>
                </div>
              </button>

              <button class="product-button">
                <div class="product-image-container bordered">
                  <span class="product-image">
                    <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/a/j/aji_2_1.webp" width="72" height="72" alt="Ají Bembos" loading="lazy"/>
                  </span>
                </div>
                <div class="product-description">
                  <p>Ají Bembos</p>
                </div>
              </button>
          </div>

          <div id="salsaFavContainer" class="salsaFavContainer">
              <select class="hidden-select" name="" id="">
                <option value="19140">19140</option>
                <option value="19141">19141</option>
              </select>

              <button class="product-button">
                <div class="product-image-container">
                  <span class="product-image">
                    <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/m/a/mayonesa_3_2.webp" width="72" height="72" alt="Mayonesa" loading="lazy" />
                  </span>
                </div>
                <div class="product-description">
                  <p>Mayonesa</p>
                </div>
              </button>

              <button class="product-button">
                <div class="product-image-container bordered">
                  <span class="product-image">
                    <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/k/e/ketchup_2.webp" width="72" height="72" alt="Ketchup" loading="lazy" />
                  </span>
                </div>
                <div class="product-description">
                  <p>Ketchup</p>
                </div>
              </button>

              <button class="product-button">
                <div class="product-image-container bordered">
                  <span class="product-image">
                    <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/a/j/aji_2_1.webp" width="72" height="72" alt="Ají Bembos" loading="lazy" />
                  </span>
                </div>
                <div class="product-description">
                  <p>Ají Bembos</p>
                </div>
              </button>
          </div>

          <div class="extraS-header" onclick="toggleExtraSContainer()">
              <span class="extraS-header-number">4</span>
              <p class="extraS-header-text">¿Desea algún extra?</p>
              <span class="toggle-icon">▼</span>
          </div>

          <div id="extraSContainer" class="extraSContainer">
              <select class="hidden-select" name="" id="">
                <option value="19140">19140</option>
                <option value="19141">19141</option>
              </select>

              <button class="product-button">
                <div class="product-image-container bordered">
                  <span class="product-image">
                    <img src="https://www.bembos.com.pe/_nuxt/img/all-salsa.ab23071.svg" width="72" height="72" alt="Todas Las Salsas" loading="lazy" />
                  </span>
                </div>
              </button>

              <div class="product-item">
                <button class="product-button">
                  <div class="product-image-container">
                    <span class="product-image">
                      <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/k/e/ketchup_2.webp" width="72" height="72" alt="Coca Cola Sabor Original" loading="lazy" />
                    </span>
                  </div>
                  <div class="product-description">
                    <p>3 Ketchup + S/.1.00</p>
                  </div>
                </button>
                <div class="quantity-controls">
                  <button class="minus-btn">−</button>
                  <span class="quantity">0</span>
                  <button class="plus-btn">+</button>
                </div>
              </div>

              <div class="product-item">
                <button class="product-button">
                  <div class="product-image-container">
                    <span class="product-image">
                      <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/m/a/mayonesa_3_2.webp" width="72" height="72" alt="Mayonesa" loading="lazy" />
                    </span>
                  </div>
                  <div class="product-description">
                    <p>Mayonesa 2 Oz + S/.1.50</p>
                  </div>
                </button>
                <div class="quantity-controls">
                  <button class="minus-btn">−</button>
                  <span class="quantity">0</span>
                  <button class="plus-btn">+</button>
                </div>
              </div>

              <div class="product-item">
                <button class="product-button">
                  <div class="product-image-container">
                    <span class="product-image">
                      <img src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/a/j/aji_2_1.webp" width="72" height="72" alt="Mayonesa" loading="lazy" />
                    </span>
                  </div>
                  <div class="product-description">
                    <p>Ají Bembos 2 Oz + S/.1.50</p>
                  </div>
                </button>
                <div class="quantity-controls">
                  <button class="minus-btn">−</button>
                  <span class="quantity">0</span>
                  <button class="plus-btn">+</button>
                </div>
              </div>
          </div>

        </div>
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
            <button class="add-button">AGREGAR S/. 16.90</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Hamburguesas;

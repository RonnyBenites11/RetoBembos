import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="social-icons">
          <a href="https://www.facebook.com/bembos/" target="_blank">
            <img src="/src/assets/img/Facebook.svg" alt="" />
          </a>

          <a href="https://www.youtube.com/@BembosCanal/videos" target="_blank">
            <img src="/src/assets/img/Youtube.svg" alt="" />
          </a>

          <a href="https://x.com/bembosoficial?lang=es" target="_blank">
            <img src="/src/assets/img/Twitter.svg" alt="" />
          </a>

          <a href="https://www.instagram.com/bembosoficial/?hl=es" target="_blank">
            <img src="/src/assets/img/Instagram.svg" alt="" />
          </a>
        </div>

        <div className="footer-content">
          <div className="footer-container-links">
            <nav className="footer-links">
              <ul>
                <li>
                  <a href="#">Locales</a>
                </li>
                <li>
                  <a href="#">Zonas de Reparto</a>
                </li>
                <li>
                  <a href="#">Nosotros</a>
                </li>
                <li>
                  <a href="#">Preguntas Frecuentes</a>
                </li>
                <li>
                  <a href="#">Mapa de Sitio</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Política de Datos Personales</a>
                </li>
                <li>
                  <a href="#">Términos y Condiciones de Promociones</a>
                </li>
                <li>
                  <a href="#">Derechos ARCO</a>
                </li>
              </ul>
            </nav>
            <div className="logo-bembos">
              <img src="/src/assets/img/bembos.svg" alt="Logo Bembos" />
            </div>
          </div>

          <div className="payment-options">
            <p>Formas de Pago</p>
            <div className="payment-cards">
              <img src="/src/assets/img/vista.svg" alt="Visa" className="payment-img" />
              <img src="/src/assets/img/mastercard.svg" alt="MasterCard" className="payment-img" />
              <img
                src="/src/assets/img/american-express.svg"
                alt="American Express"
                className="payment-img payment-aexpress"
              />
            </div>
            <div className="safetypay-img">
              <img src="/src/assets/img/safetypay.svg" alt="SafetyPay" />
            </div>
            <button className="receipt-button">
              <img src="/src/assets/img/comprobante.svg" alt="" />
              Comprobantes
            </button>
          </div>

          <div className="newsletter">
            <p>¿Quieres recibir promociones y noticias?</p>
            <div className="correo">
              <input type="email" placeholder="Tu Correo" />
              <button>Enviar</button>
            </div>
            <div className="terms-checkbox">
              <input type="checkbox" id="accept-terms" />
              <label htmlFor="accept-terms" className="terms-label">
                He leído y acepto los <span>términos y condiciones</span>
              </label>
            </div>
            <a className="complaints-img" href="#">
              <img src="/src/assets/img/libro-de-reclamaciones.webp" alt="Libro de Reclamaciones" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2019 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

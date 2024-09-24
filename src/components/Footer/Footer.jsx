import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="social-icons">
          <a href="#">
            <img src="/src/assets/img/Facebook.svg" alt="" />
          </a>

          <a href="#">
            <img src="/src/assets/img/Youtube.svg" alt="" />
          </a>

          <a href="#">
            <img src="/src/assets/img/Twitter.svg" alt="" />
          </a>

          <a href="#">
            <img src="/src/assets/img/Instagram.svg" alt="" />
          </a>
        </div>

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
            <li>
              <a href="#">Política de Privacidad</a>
            </li>
            <li>
              <a href="#">Términos y Condiciones</a>
            </li>
            <li>
              <a href="#">Derechos de Usuario</a>
            </li>
            <li>
              <img src="/src/assets/img/bembos.svg" alt="Logo Bembos" id="logo-bembos" />
            </li>
          </ul>
        </nav>

        <div className="payment-options">
          <p>Formas de Pago</p>
          <img src="/src/assets/img/visa1.png" alt="Visa" className="payment-img" />
          <img src="/src/assets/img/mastercard3.png" alt="MasterCard" className="payment-img" />
          <img src="/src/assets/img/AExpress4.png" alt="American Express" className="payment-img" />
          <img src="/src/assets/img/pngegg.png" alt="SafetyPay" className="safetypay-img" />
          <button className="receipt-button">Comprobantes</button>
        </div>

        <div className="newsletter">
          <p>¿Te gustaría recibir nuestras promociones?</p>
          <input type="email" placeholder="Tu Correo" />
          <button>Enviar</button>
          <div className="terms-checkbox">
            <input type="checkbox" id="accept-terms" />
            <label htmlFor="accept-terms" className="terms-label">
              He leído y acepto los términos
            </label>
          </div>
          <a href="#">
            <img src="/src/assets/img/reclamaciones.jpg" alt="Libro de Reclamaciones" className="complaints-img" />
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2019 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};
  
  export default Footer;
  
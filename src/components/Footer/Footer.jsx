import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="Icons">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>

                <div className="footerNav">
                    <ul>
                        <li><a href="#">Locales</a></li>
                        <li><a href="#">Zonas de Reparto</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="#">Mapa de Sitio</a></li>
                        <li><a href="#">Política de Datos Personales</a></li>
                        <li><a href="#">Términos y condiciones de Promociones</a></li>
                        <li><a href="#">Derechos ARCO</a></li>
                        <li><img src="./img/bembos logo.png" alt="Bembos Logo" id="bembos-logo" /></li>
                    </ul>
                </div>

                <div className="PayMethods">
                    <p>FORMAS DE PAGO</p>
                    <img src="/src/assets/img/visa1.png" alt="Visa" className="payment-logo" />
                    <img src="/src/assets/img/mastercard3.png" alt="MasterCard" className="payment-logo" />
                    <img src="/src/assets/img/AExpress4.png" alt="American Express" className="payment-logo" />
                    <img src="/src/assets/img/" alt="SafetyPay" className="logoSpay" />
                    <button className="btnComprobantes">COMPROBANTES</button>
                </div>

                <div className="form">
                    <p>¿Quiere recibir promociones y noticias?</p>
                    <input type="text" placeholder="Tu Correo" />
                    <button>Enviar</button>
                    <div className="checkbox-wrapper">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms" className="checkboxLabel">He leído y revisado los términos y condiciones</label>
                    </div>
                    <a href="#"><img src="/src/assets/img/pngegg.png" alt="Libro de Reclamaciones" className="bookImage" /></a>
                </div>

                <div className="footerBottom">
                    <p>© 2019 Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

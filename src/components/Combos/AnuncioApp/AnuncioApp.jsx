import React from 'react';
import './AnuncioApp.css'; // Importa el archivo CSS

const AnuncioApp = () => {
  return (
    <div className="app-promotion-container">
      <div className="app-promotion-header">
        <h3>
          Descarga nuestra <br />
          <strong>APP BEMBOS y accede <br /> a nuevos beneficios</strong>
        </h3>
        <div className="app-icon">
          <img src="https://www.bembos.com.pe/_ipx/f_webp,q_80,s_1536x1536/img/app/icon.webp" alt="App Icon" />
        </div>
      </div>
      <div className="app-promotion-content">
        <div className="app-promotion-image">
          <img src="https://www.bembos.com.pe/_ipx/f_webp,s_1536x2075/img/app/phoneGlobo.webp" alt="Bembos App" />
        </div>
        <div className="app-promotion-details">
          <ul>
            <li>
              <div className="checkmark">✔</div>
              <p><strong>Pide más rápido tu hamburguesa favorita</strong> para disfrutarla las veces que quieras.</p>
            </li>
            <li>
              <div className="checkmark">✔</div>
              <p><strong>Acumula puntos</strong> por cada compra y canjéalos por promociones exclusivas.</p>
            </li>
            <li>
              <div className="checkmark">✔</div>
              <p><strong>Sé el primero en recibir notificaciones</strong> y conoce nuestras promociones en hamburguesas y más.</p>
            </li>
          </ul>
          <div className="download-section">
            <p><strong>Descárgalo aquí:</strong></p>
            <div className="download-links">
              <a href="https://play.google.com/store/apps/details?id=com.osp.projects.bembos&hl=es-419">
                <img src="https://www.bembos.com.pe/img/app/icons/googleplay.svg" alt="Google Play" />
              </a>
              <a href="https://apps.apple.com/pe/app/bembos/id952866349">
                <img src="https://www.bembos.com.pe/img/app/icons/appstore.svg" alt="App Store" />
              </a>
              <a href="https://appgallery.huawei.com/#/app/C101993149">
                <img src="https://www.bembos.com.pe/img/app/icons/appgallery.svg" alt="App Gallery" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnuncioApp;

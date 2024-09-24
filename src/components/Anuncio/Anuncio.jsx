import React from 'react';
import './Anuncio.css';

const Anuncio = () => {
  return (
    <div>
      <div className="Anuncios">
        <a href="#"><img src="/src/assets/img/Cobertura.webp" alt="Cobertura" /></a>
        <a href="#"><img src="/src/assets/img/Promos.webp" alt="Promos" /></a>
      </div>

      <div className="container">
        <div className="social-box">
          <div className="social-media">
            <h2>SOCIAL BEMBOS</h2>
            <p>Compartir en:</p>
            <div className="social-buttons">
              <a href="#" className="twitter-button">
                <img src="/src/assets/img/twitter logo.png" alt="Twitter" />
              </a>
              <a href="#" className="facebook-button">
                <img src="/src/assets/img/facebook logo.png" alt="Facebook" />
              </a>
            </div>
          </div>

          <div className="bembos-info">
            <div className="bembos-details">
              <strong>BEMBOS</strong> <span>1,128,588 followers</span>
            </div>
            <div className="buttons">
              <button>Follow Page</button>
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncio;

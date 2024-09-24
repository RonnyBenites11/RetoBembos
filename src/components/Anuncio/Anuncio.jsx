import React from 'react';
import './Anuncio.css';

const Anuncio = () => {
  return (
    <div>
    <div className="banner">
      <a href="#"><img src="/src/assets/img/Cobertura.webp" alt="Cobertura" /></a>
      <a href="#"><img src="/src/assets/img/Promos.webp" alt="Promociones" /></a>
    </div>
  
    <section className="contentWrapper">
      <div className="infoCard">
        <div className="leftPanel">
          <div className="heading">
            SOCIAL <br />
            BEMBOS
          </div>
          <p className="shareLabel">Compartir en:</p>
          
            <a href="#">
            <img
              src="/src/assets/img/twitter logo.png"
              width="145"
              height="32"
              alt="Twitter Bembos"
              loading="lazy"
            />
            </a>
          
          
          <a href="">
            <img
              src="/src/assets/img/facebook logo.png"
              width="145"
              height="32"
              alt="Facebook Bembos"
              loading="lazy"
            />
          </a>
          
        </div>
        <div className="rightPanel">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbembos%2F&amp;tabs&amp;width=500&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
            width="500"
            height="130"
            scrolling="no"
            frameBorder="0"
            allowFullScreen="allowfullscreen"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="facebookEmbed"
          />
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Anuncio;

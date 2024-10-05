import React from 'react';
import './ContentBg.css';

export const ContenBg = ({ visible }) => {
  return (
    <div className={`content-bg ${visible ? 'visible' : ''}`}>
      <div className={`content-bg-top ${visible ? 'visible' : ''}`}></div>
      <div className={`content-bg-bot ${visible ? 'visible' : ''}`}></div>
    </div>
  );
};

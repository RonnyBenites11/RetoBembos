import React from 'react';
import './ContentBg.css';

export const ContenBg = ({ visible }) => {
  return <div className={`content-bg ${visible ? 'visible' : ''}`}></div>;
};

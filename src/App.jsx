/*import { useState } from 'react';*/
import './App.css';
import { ContainerProducts } from './components/ContainerProducts/ContainerProducts';

export const App = () => {
  return (
    <div>
      <ContainerProducts sectionName={'promocion'} />
      <ContainerProducts sectionName={'menu'} />
    </div>
  );
};

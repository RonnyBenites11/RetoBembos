import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Menu from './components/Menu/Menu.jsx';
import Combos from './components/Combos/Combos.jsx';
import Pollo from './components/Combos/Pollo/Pollo.jsx';
import Hamburguesa from './components/Combos/Hamburguesa/Hamburguesa.jsx';
import Loncherita from './components/Combos/Loncherita/Loncherita.jsx';
import Complementos from './components/Combos/Complementos/Complementos.jsx';
import Bebidas from './components/Combos/Bebidas/Bebidas.jsx';
import Helados from './components/Combos/Helados/Helados.jsx';
import Inkachips from './components/Combos/Inkachips/Inkachips.jsx';

//  createRoot(document.getElementById('root')).render(<App />);
// /*createRoot(document.getElementById('root')).render(<Menu />);*/
 createRoot(document.getElementById('root')).render(<App />);

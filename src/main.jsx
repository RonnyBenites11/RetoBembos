import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Menu from './components/Menu/Menu.jsx';
import Combos from './components/Combos/Combos.jsx';
import Pollo from './components/Combos/Pollo/Pollo.jsx';
import Hamburguesa from './components/Combos/Hamburguesa/Hamburguesa.jsx';
import Loncherita from './components/Combos/Loncherita/Loncherita.jsx';

//  createRoot(document.getElementById('root')).render(<App />);
// /*createRoot(document.getElementById('root')).render(<Menu />);*/
 createRoot(document.getElementById('root')).render(<Hamburguesa />);

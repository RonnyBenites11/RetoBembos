import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Menu from './components/Menu/Menu.jsx';
import Combos from './components/Combos/Combos.jsx';
import { Promociones } from './components/Promociones/Promociones.jsx';
import Comb0s from './components/PedidoAdicional/Comb0s/Navegacion/Comb0s.jsx';

createRoot(document.getElementById('root')).render(<App />);

/*createRoot(document.getElementById('root')).render(<Menu />);*/
/*createRoot(document.getElementById('root')).render(<Combos />);*/
/*createRoot(document.getElementById('root')).render(<Promociones />);*/
/*createRoot(document.getElementById('root')).render(<Comb0s />);*/

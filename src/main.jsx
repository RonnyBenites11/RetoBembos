import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Menu from './components/Menu/Menu.jsx';
import Combos from './components/Combos/Combos.jsx';
import Comb0s from './components/PedidoAdicional/Comb0s/Navegacion/Comb0s.jsx';
import Burguer from './components/PedidoAdicional/Hamburguesas/Navegacion/Burguer.jsx'
import Pollo from './components/PedidoAdicional/Pollo/Navegacion/Pollo.jsx'
import Bebidas from './components/PedidoAdicional/Bebidas/Navegacion/Bebidas.jsx'
import Complementos from './components/PedidoAdicional/Complementos/Navegacion/Complementos.jsx'
import Helados from './components/PedidoAdicional/Helados/Navegacion/Helados.jsx';

// createRoot(document.getElementById('root')).render(<App />);
/*createRoot(document.getElementById('root')).render(<Menu />);*/
// createRoot(document.getElementById('root')).render(<Combos />);
createRoot(document.getElementById('root')).render(<Comb0s />);
// createRoot(document.getElementById('root')).render(<Burguer />);
// createRoot(document.getElementById('root')).render(<Pollo />);
// createRoot(document.getElementById('root')).render(<Bebidas />);
// createRoot(document.getElementById('root')).render(<Burguer />);
// createRoot(document.getElementById('root')).render(<Complementos />);
// createRoot(document.getElementById('root')).render(<Helados />);





import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Menu from './components/Menu/Menu.jsx';
import Combos from './components/Combos/Combos.jsx';
import Comb0s from './components/PedidoAdicional/Comb0s/Navegacion/Comb0s.jsx';
import Burguer from './components/PedidoAdicional/Hamburguesas/Navegacion/Burguer.jsx'
import Pollo from './components/Combos/Pollo'
import Bebidas from './components/PedidoAdicional/Bebidas/Navegacion/Bebidas.jsx'
import Complementos from './components/PedidoAdicional/Complementos/Navegacion/Complementos.jsx'
import Helados from './components/PedidoAdicional/Helados/Navegacion/Helados.jsx';

import Producto from './components/PedidoAdicional/Pollo/Producto/Producto.jsx';
import Hamburguesa from './components/Combos/Hamburguesa/Hamburguesa.jsx';






//   createRoot(document.getElementById('root')).render(<App />);
/*createRoot(document.getElementById('root')).render(<Menu />);*/
// createRoot(document.getElementById('root')).render(<Combos />);
  createRoot(document.getElementById('root')).render(<Producto tipoProducto="helados"  />);
// createRoot(document.getElementById('root')).render(<Burguer />);
// createRoot(document.getElementById('root')).render(<Pollo />);
// createRoot(document.getElementById('root')).render(<Bebidas />);
// createRoot(document.getElementById('root')).render(<Burguer />);
// createRoot(document.getElementById('root')).render(<Complementos />);
// createRoot(document.getElementById('root')).render(<Helados />);





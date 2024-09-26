import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Menu from './components/Menu/Menu.jsx';

createRoot(document.getElementById('root')).render(<App />);
/*createRoot(document.getElementById('root')).render(<Menu />);*/

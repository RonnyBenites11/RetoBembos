import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';
import './Combos.css';
import NavigationSec from './NavigationSec';
import CombosBembos from './CombosBembos';
import Hamburguesa from './Hamburguesa';
import Combo from './Combo/Combo';

const Combos = () => {
  return (
    <div className="app">
      <Header className="fix" />
      <Navigation />
      <NavigationSec />
      <Combo />

      {<div className="span"></div>}

      {<Footer />}
    </div>
  );
};

export default Combos;

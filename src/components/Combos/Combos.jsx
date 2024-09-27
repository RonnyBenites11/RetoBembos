import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';
import './Combos.css';
import NavigationSec from './NavigationSec';
import CombosBembos from './CombosBembos';

const Combos = () => {
  return (
    <div className="app">
      <Header className="fix" />
      <Navigation />
      <NavigationSec />
      <CombosBembos/>


      <div className='span'></div>

      <Footer />
    </div>
  );
};

export default Combos;

import Header from "../../../Header"
import Navigation from "../../../Navigation"
import VerMas from "../VerMas";


const Burguer = () => {

    return (

        <div className="app">

        <Header className="fix"/>
        <Navigation/>

        <div>
        <VerMas/>
        </div>
        </div>

    );

};

export default Burguer;


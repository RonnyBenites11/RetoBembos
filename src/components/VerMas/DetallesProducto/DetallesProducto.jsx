import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../../Cart/Cart';

const DetallesProducto = ({ selectedTipo, productoData, abrirCarrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const [precioTotal, setPrecioTotal] = useState(selectedTipo.precio);
  const [activeComb, setActiveComb] = useState({}); // Estado para las combinaciones activas

  useEffect(() => {
    setPrecioTotal(selectedTipo.precio * cantidad);
  }, [cantidad, selectedTipo.precio]);

  const aumentarCantidad = () => {
    setCantidad((prev) => prev + 1);
  };

  const disminuirCantidad = () => {
    setCantidad((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const agregarAlCarrito = () => {
    abrirCarrito(selectedTipo, cantidad, precioTotal); // Se agrega el producto al carrito
  };

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  const closeCart = () => {
    setVisible(false);
  };

  const agregarCarritoYToggle = () => {
    /*agregarAlCarrito(selectedTipo, cantidad, precioTotal);*/ // Agrega el producto al carrito
    toggleVisibility(); // Cambia la visibilidad del carrito
  };

  const handleCombClick = (nropregunta, nrocomb) => {
    setActiveComb((prev) => ({
      ...prev,
      [nropregunta]: prev[nropregunta] === nrocomb ? null : nrocomb, // Alternar la selección
    }));
  };

  return (
    <div className="producto-info">
      <div className="producto-container">
        <div className="producto-left-container">
          <div className="producto-left-route">
            <Link to="/">Inicio</Link> &gt;
            <Link to="/menu">Menu</Link> &gt;
            <a href="#">{selectedTipo.nombre}</a>
          </div>
          <div className="producto-left-image">
            <img src={selectedTipo.img} alt={selectedTipo.nombre} />
          </div>
        </div>
        <div className="product-right-container">
          <div className="product-right-txt">
            <h1 className="product-right-title">{selectedTipo.nombre}</h1>
            <p className="product-right-description">
              Disfruta de una deliciosa Loncherita que incluye: Papa regular, frugos y un helado mini princesa.
            </p>
          </div>

          {productoData.preguntas && productoData.preguntas.length > 0 ? (
            productoData.preguntas.map((pregunta) => (
              <div key={pregunta.nropregunta}>
                <div className="product-right-choose">
                  <div className="choose-title">
                    <span className="choose-number">{pregunta.nropregunta}</span>
                    <p className="choose-question">{pregunta.nombrepregunta}</p>
                  </div>
                  <img className="choose-img" src="/src/assets/img/down-arrow-product.svg" alt="" />
                </div>
                <div className="product-choose-chips">
                  {pregunta.combinaciones && pregunta.combinaciones.length > 0 ? (
                    pregunta.combinaciones.map((comb) => (
                      <div
                        key={comb.nrocomb}
                        className="combo-card"
                        onClick={() => handleCombClick(pregunta.nropregunta, comb.nrocomb)}
                      >
                        <div
                          className={`combo-img ${activeComb[pregunta.nropregunta] === comb.nrocomb ? 'active' : ''}`}
                        >
                          <img src={comb.imgcomb} alt={comb.titulocomb} />
                        </div>
                        <p className="combo-title">{comb.titulocomb}</p>
                      </div>
                    ))
                  ) : (
                    <p>No hay combinaciones disponibles.</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No hay preguntas disponibles para este producto.</p>
          )}
        </div>
      </div>

      <div className="producto-footer">
        <div className="producto-footer-container">
          <div className="footer-count">
            <span className="product-count">Cantidad</span>
            <div className="footer-count-btns">
              <span className="product-minus" onClick={disminuirCantidad}>
                -
              </span>
              <span className="product-number">{cantidad}</span>
              <span className="product-plus" onClick={aumentarCantidad}>
                +
              </span>
            </div>
          </div>
<<<<<<< HEAD
          <button className="footer-btn-add" onClick={agregarAlCarrito}>
=======
          <button className="footer-btn-add" onClick={agregarCarritoYToggle}>
>>>>>>> 10cc757ace7ef20fb849c40d32ce729260408271
            Agregar S/. {precioTotal.toFixed(2)}
          </button>
        </div>
      </div>

      <Cart visible={visible} onClose={closeCart} />
    </div>
  );
};

export default DetallesProducto;

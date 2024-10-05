import React, { useEffect, useState } from 'react';
import './Cart.css';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Cart = ({ visible, onClose }) => {
  const [addComplementData, setAddComplement] = useState([]);
  const [carrito, setCarrito] = useState([]); // Estado para manejar los productos en el carrito

  useEffect(() => {
    const readAddComplement = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/complementos');
        setAddComplement(data[0]?.tipos || []);
      } catch (error) {
        console.log(error);
      }
    };
    readAddComplement();
  }, []);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto, cantidad, precioTotal) => {
    setCarrito((prevCarrito) => [...prevCarrito, { ...producto, cantidad, precioTotal }]);
  };

  // Función para aumentar la cantidad de un producto en el carrito
  const aumentarCantidad = (index) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = [...prevCarrito];
      nuevoCarrito[index].cantidad += 1; // Aumentar cantidad
      nuevoCarrito[index].precioTotal = nuevoCarrito[index].cantidad * nuevoCarrito[index].precio; // Actualizar precio total
      return nuevoCarrito;
    });
  };

  // Función para disminuir la cantidad de un producto en el carrito
  const disminuirCantidad = (index) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = [...prevCarrito];
      if (nuevoCarrito[index].cantidad > 1) { // Evitar que la cantidad sea menor que 1
        nuevoCarrito[index].cantidad -= 1; // Disminuir cantidad
        nuevoCarrito[index].precioTotal = nuevoCarrito[index].cantidad * nuevoCarrito[index].precio; // Actualizar precio total
      }
      return nuevoCarrito;
    });
  };

  // Función para eliminar un producto del carrito
  const eliminarProducto = (index) => {
    setCarrito((prevCarrito) => prevCarrito.filter((_, i) => i !== index)); // Filtrar el carrito
  };

  const calcularSubtotal = () => {
    return carrito.reduce((total, item) => total + item.precioTotal, 0);
  };

  const totalAPagar = calcularSubtotal(); // Calcula el total a pagar

  

  return (
    <div className={`cart-container ${visible ? 'visible' : ''}`}>
      <div className="cart-adress">
        <p className="cart-adress-title">
          <span className="cart-adress-txt">Entregar en: </span>Miraflores Bowling Park 135,
          <span className="cart-adress-city">Lima - Miraflores</span>
        </p>
        <div className="cart-down-img">
          <img src="/src/assets/img/down-arrow.svg" alt="" />
        </div>
        <div className="cart-close" onClick={onClose}>
          <span>x</span>
        </div>
      </div>
      <div className="cart-info">
        <div className="cart-info-top">
          <p className="cart-title">Tu Carrito</p>
          <p className="cart-txt">
            ¿Cuentas con cupones de Dscto.? <span>Ingrésalos en el siguiente paso</span>
          </p>
        </div>
        <div className="cart-product">
          {carrito.length > 0 ? (
            carrito.map((item, index) => (
              <div className="cart-product-row" key={index}>
                <div className="cart-detail">
                  <div className="cart-detail-img">
                    <img src={item.img} alt="product" />
                  </div>
                  <div className="cart-detail-container">
                    <p className="cart-detail-product">
                      {item.cantidad} x {item.nombre}
                    </p>
                    <p className="cart-detail-price">S/. {item.precioTotal.toFixed(2)}</p>
                  </div>
                </div>
                <div className="cart-btns">
                  <div className="cart-btns-top">
                    <div className="icon-delete" onClick={() => eliminarProducto(index)}>
                      <img src="/src/assets/img/delete.svg" alt="delete" />
                    </div>
                    <span>Leer más</span>
                  </div>
                  <div className="cart-btns-bottom">
                    <span className="cart-minus" onClick={() => disminuirCantidad(index)}>-</span>
                    <span className="cart-quantity">{item.cantidad}</span>
                    <span className="cart-plus" onClick={() => aumentarCantidad(index)}>+</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
          <div className="cart-subtotal">
            <div className="cart-subtotal-txt">
              <span>Subtotal</span>
              <span>S/. {totalAPagar.toFixed(2)}</span>
            </div>
            <div className="cart-subtotal-txt">
              <span>Delivery</span>
              <span>S/ 6.50</span>
            </div>
          </div>
          <div className="cart-total">
            <span>Total a pagar</span>
            <span>S/. {(totalAPagar + 6.5).toFixed(2)}</span>
          </div>
        </div>
        <div className="cart-add-container">
          <p className="cart-add-title">También Agregar</p>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }} // Si deseas paginación
          >
            {addComplementData.map((addcomplement, index) => (
              <SwiperSlide key={index}>
                <div className="cart-add-product">
                  <img src={addcomplement.img} alt="complement" />
                  <div className="cart-add-detail">
                    <div className="cart-add-txt">
                      <p className="cart-add-product-title">{addcomplement.nombre}</p>
                      <p className="cart-add-product-price">S/. {addcomplement.precio.toFixed(2)}</p>
                    </div>
                    <button
                      className="cart-add-btn"
                      onClick={() => agregarAlCarrito(addcomplement, 1, addcomplement.precio)}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`cart-footer ${visible ? 'visible' : ''}`}>
          <button className="cart-btn-pay cart-footer-btn">
            <span className="cart-footer-quantity">{carrito.length}</span>Ir a pagar{' '}
            <span className="cart-footer-price">S/. {(totalAPagar + 6.5).toFixed(2)}</span>
          </button>
          <button className="cart-btn-buy cart-footer-btn">Seguir comprando</button>
        </div>
      </div>
    </div>
  );
};

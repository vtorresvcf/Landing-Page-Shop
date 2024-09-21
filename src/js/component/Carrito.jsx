import React from "react";

const Carrito = ({ carrito, setisValueCarrito }) => {

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad,0)
  
  return (
    <div className="container-carrito">
      <h1 className="text-center d.inline ">Carrito de compra</h1>
      {carrito.map((producto, key) => (
        <>
          {" "}
          <div className="container-productos-carrito" key={key}>
            <img
              className="imagen-carrito img-fluid"
              src={producto.imagen}
            ></img>
            <div className=" texto-producto-carrito">
              <h5> {producto.titulo} </h5>
              <p className="text-success fw-bold m-0">
                {" "}
                Precio: {producto.precio}
              </p>
            </div>

            <div className=" container-input">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Cantidad
              </label>
              <input
                disabled
                type="number"
                className="form-control"
                id="formGroupExampleInput"
                value={producto.cantidad}
              />
            </div>
            
          </div>
          
        </>
      ))}
      
      <div className="w-100 bg-success rounded m-5">
      <button
        type="button"
        className="btn btn-primary btn-block w-50 "
        onClick={() => setisValueCarrito(false)}
      >
        Volver y añadir más productos
      </button>
      <button className="btn btn-dark w-50">Total: ${total}</button>
      </div>

    </div>
  );
};

export default Carrito;

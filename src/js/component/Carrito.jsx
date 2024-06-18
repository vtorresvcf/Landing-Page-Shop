import React from "react";

const Carrito = ({ carrito, setisValueCarrito }) => {
  return (
    <div className="container-carrito">
      <h1 className="text-center d.inline ">Productos del carrito</h1>
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
                Precio: {producto.precio}{" "}
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
      <button
        type="button"
        className="btn btn-dark btn-lg btn-block mt-5 mx-auto"
        onClick={() => setisValueCarrito(false)}
      >
        Volver y añadir más productos
      </button>
    </div>
  );
};

export default Carrito;

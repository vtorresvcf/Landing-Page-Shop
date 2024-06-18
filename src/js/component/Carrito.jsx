import React from "react";

const Carrito = ({ carrito, setSuma }) => {
  return (
    <div>
      {carrito.map((producto, index) => (
        <table className="table">
          <thead>
            <tr key={index}>
              <th scope="col">Titulo</th>
              <th scope="col">Descripcion</th>
              <th scope="col">imagen</th>
              <th scope="col">precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{producto.titulo}</td>
              <td>{producto.descripcion}to</td>
              <td>{producto.imagen}</td>
              <td>{producto.precio}</td>
            </tr>
          </tbody>
        </table>
      ))}
      <button onClick={() => setSuma(false)}>Volver</button>
    </div>
  );
};

export default Carrito;

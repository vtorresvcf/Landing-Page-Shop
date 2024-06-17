import React from "react";
import Card from "./Card";
import { productos } from "../../data/productos";
import { useState } from "react";

const Cards = () => {
  const [suma, setSuma] = useState(false);

  const [productoSeleccionado, setProductoSeleccionado] = useState([]);
  const manejarSeleccion = (producto) => {
    setProductoSeleccionado(producto);
    setSuma(true);
    console.log(productoSeleccionado);
  };

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap container">
        {suma ? (
          <>
            <div>
              <h1>Carrito de Compras</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              <a
                onClick={() => setSuma(false)}
                href="#"
                className="btn btn-primary"
              >
                Volver a comprar
              </a>
            </div>
          </>
        ) : (
          <>
            {productos.map((producto) => {
              return (
                <>
                  <Card
                    producto={producto}
                    key={producto.id}
                    setSuma={setSuma}
                    manejarSeleccion={manejarSeleccion}
                  />
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Cards;

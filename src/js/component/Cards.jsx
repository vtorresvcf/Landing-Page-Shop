import React from "react";
import Card from "./Card";
import { productos } from "../../data/productos";
import { useState } from "react";

const Cards = () => {
  const [suma, setSuma] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap container">
        {productos.map((producto, index) => {
          return (
            <>
              <Card
                id={producto.id}
                key={index}
                titulo={producto.titulo}
                descripcion={producto.descripcion}
                imagen={producto.imagen}
                precio={producto.precio}
                setSuma={setSuma}
                suma={suma}
              />
            </>
          );
        })}
        {suma && <p>Carrito</p>}
      </div>
    </>
  );
};

export default Cards;

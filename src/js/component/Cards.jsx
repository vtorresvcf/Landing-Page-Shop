import React from "react";
import Card from "./Card";
import Carrito from "./Carrito";
import { productos } from "../../data/productos";
import { useState } from "react";

const Cards = () => {
  const [suma, setSuma] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const manejarSeleccion = (producto) => {
    setCarrito([...carrito, producto]);
    setSuma(true);
  };

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap container">
        {suma ? (
          <>
            <Carrito carrito={carrito} setSuma={setSuma} />
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

import React from "react";
import Card from "./Card";
import Carrito from "./Carrito";
import { productos } from "../../data/productos";
import { useState } from "react";

const Cards = () => {
  const [isValueCarrito, setisValueCarrito] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const manejarSeleccion = (nuevoProducto) => {
    const exist = carrito.find((producto) => producto.id === nuevoProducto.id);
    if (exist) {
      setCarrito(
        carrito.map((producto) =>
          producto.id === nuevoProducto.id
            ? { ...producto, cantidad: producto.cantidad + 1 }
            : producto
        )
      );
      setisValueCarrito(true);
    } else {
      setCarrito([...carrito, nuevoProducto]);
      setisValueCarrito(true);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap container">
        {isValueCarrito ? (
          <>
            <Carrito carrito={carrito} setisValueCarrito={setisValueCarrito} />
          </>
        ) : (
          <>
            {productos.map((producto, index) => {
              return (
                <>
                  <Card
                    producto={producto}
                    key={producto.id}
                    index={index}
                    setisValueCarrito={setisValueCarrito}
                    manejarSeleccion={manejarSeleccion}
                    setCarrito={setCarrito}
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

import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";

const Card = ({ producto, manejarSeleccion }) => {
  const { titulo, descripcion, imagen, precio } = producto;

  return (
    <div className="card mx-auto ">
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <div className="d-flex justify-content-around botones-card">
          <a
            onClick={() => manejarSeleccion(producto)}
            href="#"
            className="btn btn-primary"
          >
            Añadir al <TbShoppingBagPlus size={30} />
          </a>
          <button className="btn btn-dark disabled"> {precio}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

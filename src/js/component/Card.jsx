import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";

const Card = ({ producto, manejarSeleccion }) => {
  const { titulo, descripcion, imagen, precio } = producto;

  return (
    <div className="card mx-auto ">
      <img src={imagen} className="card-img-top h-50" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between">
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
          <div className="btn btn-dark d-flex align-items-center"> $ {precio}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import imagenNotFound from "../imagenes/notFound.svg";
import "./Styles/paginas.css";
function notFound() {
  return (
    <React.Fragment>
      <div className="contNotFound">
        <img
          className="imagenNotFound"
          src={imagenNotFound}
          alt="no encontrado"
        />
      </div>
    </React.Fragment>
  );
}

export default notFound;

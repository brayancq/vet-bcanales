import React from "react";
import { Link } from "react-router-dom";
import "./Styles/paginas.css";
import imagenInicio from ".././imagenes/dog-png.webp";
class mainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="contenedorPrincipal">
          <div className="row">
            <div className="col-6">
              <h1>Bienvenido!</h1>
              <div className="botonPagina">
                <Link to="/listado" className="btn btn-primary">
                  Empecemos
                </Link>
              </div>
            </div>

            <div className="col-6">
              <img
                className="imagenInicio"
                src={imagenInicio}
                alt="Logo del avatar"
              ></img>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default mainPage;

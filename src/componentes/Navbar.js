import React from "react";
import { Link } from "react-router-dom";
import imagen from "../imagenes/iconoHuella.png";
import "./styles/navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navContenedor">
        <Link className="inicio" to="/">
          <img className="imgNav" src={imagen} alt="Logo" />
          <span className="navTitulo">Inicio</span>
        </Link>
      </div>
    );
  }
}

export default Navbar;

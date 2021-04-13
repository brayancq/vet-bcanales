import React from "react";
import imagen from "../imagenes/logo.svg";
import "./styles/badge.css";
class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">Nueva Mascota</div>
        <div className="badge_section-name">
          <img
            className="badge_avatarPrin"
            src={this.props.imagenPerfil}
            alt="Logo del avatar"
          ></img>
          <div className="datosMascota">
            <span className="formato">Nombre: {this.props.nombre}</span>

            <span className="formato">Dueño: {this.props.nombreDue}</span>

            <span className="formato">Teléfono: {this.props.telefono}</span>

            <span className="formato">Correo: {this.props.correo}</span>

            <span className="formato">Raza: {this.props.raza}</span>
          </div>
        </div>
        <div className="badge_footer">Práctica react</div>
      </div>
    );
  }
}

export default Badge;

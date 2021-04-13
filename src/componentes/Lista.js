import React from "react";
import "./styles/lista.css";
class ListItem extends React.Component {
  render() {
    return (
      <div className="ListItem">
        <img className="ListItem__avatar" src={this.props.badge.avatarUrl} />

        <div className="datos">
          <strong>Nombre:</strong> {this.props.badge.nombre}
          <br />
          <strong> Raza:</strong> {this.props.badge.raza}
          <br />
          <strong>Nombre del dueño:</strong> {this.props.badge.nombreDue}
          <br />
          <strong>Telf. dueño:</strong> {this.props.badge.telefono}
          <br />
          <strong>Correo dueño:</strong> {this.props.badge.email}
        </div>
      </div>
    );
  }
}
class Lista extends React.Component {
  render() {
    return (
      <div className="List">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <ListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Lista;

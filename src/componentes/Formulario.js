import React from "react";
import { Link } from "react-router-dom";
import "./styles/form.css";
class Formulario extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="contForm">
          <h1>Datos de la mascota</h1>
          <form>
            <div className="form-group">
              <label>Nombre</label>
              <input
                name="nombre"
                onChange={this.props.onChange}
                type="text"
                className="form-control-inputs"
                id="nombre"
                value={this.props.formValues.nombre}
              />
              <label>Raza</label>
              <input
                name="raza"
                onChange={this.props.onChange}
                type="text"
                className="form-control-inputs"
                id="raza"
                value={this.props.formValues.raza}
              />
              <label>Nombre del dueño</label>
              <input
                name="nombreDue"
                onChange={this.props.onChange}
                type="text"
                className="form-control-inputs"
                id="nombreDue"
                value={this.props.formValues.nombreDue}
              />
              <label>Teléfono</label>
              <input
                name="telefono"
                onChange={this.props.onChange}
                type="text"
                className="form-control-inputs"
                id="telefono"
                value={this.props.formValues.telefono}
              />
              <label>Correo</label>
              <input
                name="correo"
                onChange={this.props.onChange}
                type="email"
                className="form-control-inputs"
                id="correo"
                value={this.props.formValues.correo}
              />
            </div>
            <Link to="/listado" className="btn btn-primary">
              Guardar
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Formulario;

import React from "react";

import Badge from "../componentes/InfoPrincipal";
import "./Styles/paginas.css";

import imagenDefault from "../imagenes/mascota.png";

import Formulario from "../componentes/Formulario";

class newPetPage extends React.Component {
  state = {
    form: {
      nombre: "",
      nombreDue: "",
      raza: "",
      telefono: "",
      correo: "",
    },
  };

  valoresInputs = (e) => {
    this.setState({
      form: {
        ...this.state.form, //todos los valores
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="contenedorPrincipal">
          <div className="contFondHeader"></div>

          <div className="contenedor">
            <div className="row">
              <div className="col-6">
                <Badge
                  imagenPerfil={imagenDefault}
                  nombre={this.state.form.nombre}
                  nombreDue={this.state.form.nombreDue}
                  raza={this.state.form.raza}
                  telefono={this.state.form.telefono}
                  correo={this.state.form.correo}
                />
              </div>
              <div className="col-6">
                <Formulario
                  onChange={this.valoresInputs}
                  formValues={this.state.form}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default newPetPage;

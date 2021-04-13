import React from "react";
import { Link } from "react-router-dom";

import Lista from "../componentes/Lista";

class listPage extends React.Component {
  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        nombre: "Koki",
        nombreDue: "Brayan Canales",
        raza: "zahuate",
        email: "bcanales@csye.com",
        telefono: "85516391",
        avatarUrl: "https://acortar.link/scSrs",
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        nombre: "Major",
        nombreDue: "Luis Alvarez",
        raza: "Pastor alemán",
        email: "Ilene66@hotmail.com",
        telefono: "26662000",
        avatarUrl: "https://acortar.link/Yc7QE",
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        nombre: "Daphney",
        nombreDue: "Ingrid Leiva",
        raza: "Husky",
        email: "Ron61@hotmail.com",
        telefono: "26887009",
        avatarUrl: "https://acortar.link/FyAvx",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="contenedorPrincipalListado">
          <div className="listContenedor">
            <div className="botonListPagina">
              <Link to="/nuevo" className="btn btn-primary">
                Nuevo
              </Link>
            </div>
            <Lista badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default listPage;

import React from "react";
import notFound from "../paginas/notFound";
import mainPage from "../paginas/mainPage";
import Listado from "../paginas/listPage";
import newPetPage from "../paginas/newPetPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={mainPage} />
          <Route exact path="/listado" component={Listado} />
          <Route exact path="/nuevo" component={newPetPage} />
          <Route component={notFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

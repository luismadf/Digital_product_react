import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Venta from "./containers/Venta";
import Product from "./containers/Product";
import Layout from "./components/Layout";
import "./assets/styles/normalize.css";
import "./assets/styles/estilos.css";
import "./assets/styles/mobile.css";
import "./assets/styles/grid.css";
import "./assets/styles/animation.css";
import "./assets/styles/productos.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/Venta" component={Venta} />
          <Route exact path="/Product" component={Product} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

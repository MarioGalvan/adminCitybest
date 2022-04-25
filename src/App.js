
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Switch, Route } from "react-router-dom";
import { Passengers } from "./components/Passengers/Passengers";
import { Marcas } from "./components/Marcas/Marcas";
import { Drivers } from "./components/Drivers/Drivers";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />

        <Main>
          <ProtectedRoute exact path="/Dashboard"
            component={Home} />
          <ProtectedRoute exact path="/"
            component={Home} />
          <ProtectedRoute exact path="/Cuentas"
            component={Home} />
          <ProtectedRoute exact path="/Roles"
            component={Home} />
          <ProtectedRoute exact path="/Marcas"
            component={Marcas} />
          <ProtectedRoute exact path="/Aseguradoras"
            component={Home} />

          <ProtectedRoute exact path="/Pasajeros"
            component={Passengers} />
          <ProtectedRoute exact path="/Conductores"
            component={Drivers} />

        </Main>
      </Switch>
    </div>
  );
}


export default App;

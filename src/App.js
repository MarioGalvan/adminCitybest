import React from "react";
import { Provider } from "react-redux";
import store from "./globalState/store";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Switch, Route } from "react-router-dom";
import { Passengers } from "./components/Passengers/Passengers";
import { Marcas } from "./components/Marcas/Marcas";
import { Drivers } from "./components/Drivers/Drivers";
import Statistics from "./components/Statistics";
import CarbonFootprint from "./components/CarbonFootprint/CarbonFootprint";
import Roles from "./components/Roles";
import NewRol from "./components/Roles/NewRol";
import Account from "./components/Cuentas";
import NewAccount from "./components/Cuentas/NewAccount";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />

          <Main>
            <ProtectedRoute exact path="/Dashboard" component={Home} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/Cuentas" component={Account} />
            <ProtectedRoute exact path="/Cuentas/Nueva_Cuenta" component={NewAccount} />
            <ProtectedRoute exact path="/Roles" component={Roles} />
            <ProtectedRoute exact path="/Roles/Nuevo_Rol" component={NewRol} />
            <ProtectedRoute exact path="/Marcas" component={Marcas} />
            <ProtectedRoute exact path="/Aseguradoras" component={Home} />
            <ProtectedRoute
              exact
              path="/huella_carbono"
              component={CarbonFootprint}
            />
            <ProtectedRoute exact path="/Pasajeros" component={Passengers} />
            <ProtectedRoute exact path="/Conductores" component={Drivers} />
            <ProtectedRoute exact path="/Estadisticas" component={Statistics} />
          </Main>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;

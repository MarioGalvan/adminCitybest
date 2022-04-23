
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

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />

        <Main>
          <ProtectedRoute exact path="/Dashboard"
            component={Home} />
          {/* <ProtectedRoute path="*"
            component={Home} /> */}
          <ProtectedRoute exact path="/Cuentas"
            component={Home} />
          <ProtectedRoute exact path="/Roles"
            component={Home} />
          <ProtectedRoute exact path="/Marcas"

            component={Home} />
          <ProtectedRoute exact path="/Aseguradoras"
            component={Home} />

          <ProtectedRoute exact path="/Pasajeros"
            component={Passengers} />
          <ProtectedRoute exact path="/Conductores"
            component={Home} />



          {/* <ProtectedRoute exact path="/interlocutores" component={Interlocutores} />
          <ProtectedRoute exact path="/sabedorxs" component={Sabedorxs} />
          <ProtectedRoute exact path="/cuerpos" component={Cuerpos} />
          <ProtectedRoute exact path="/resonancias" component={Resonancias} />
          <ProtectedRoute exact path="/regiones" component={Regiones} />
          <ProtectedRoute exact path="/conversaciones" component={Conversaciones} />
          <ProtectedRoute exact path="/" component={Home} /> */}
        </Main>
      </Switch>
    </div>
  );
}


export default App;

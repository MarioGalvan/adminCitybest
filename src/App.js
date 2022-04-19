
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
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
import { Interlocutores } from "./components/interlocutores/interlocutores";
import { Sabedorxs } from "./components/Sabedorxs/Sabedorxs";
import { Cuerpos } from "./components/Cuerpos/Cuerpos";
import { Regiones } from "./components/Regiones/Regiones";
import { Resonancias } from "./components/Resonancias/Resonancias";
import { Conversaciones } from "./components/Conversaciones/Conversaciones";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />

        <Main>
          <ProtectedRoute exact path="/dashboard"
            component={Home} />
          <ProtectedRoute exact path="/interlocutores" component={Interlocutores} />
          <ProtectedRoute exact path="/sabedorxs" component={Sabedorxs} />
          <ProtectedRoute exact path="/cuerpos" component={Cuerpos} />
          <ProtectedRoute exact path="/resonancias" component={Resonancias} />
          <ProtectedRoute exact path="/regiones" component={Regiones} />
          <ProtectedRoute exact path="/conversaciones" component={Conversaciones} />
          <ProtectedRoute exact path="/" component={Home} />
        </Main>
      </Switch>
    </div>
  );
}


export default App;

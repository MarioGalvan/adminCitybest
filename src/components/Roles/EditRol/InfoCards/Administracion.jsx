import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { dynamicIcons } from "../../PermissionsInfo/dynamicIcons";

const Administracion = ({ allEdits }) => {
  return (
    <Card
      title="Administracion"
      style={{
        width: 290,
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog
          style={{
            width: "0.8rem",
            height: "0.8rem",
            marginTop: "5px",
            marginRight: "3px",
          }}
        />
        <p>Ver cuentas administradoras:</p>{" "}
        {dynamicIcons(false, "Ver cuentas administradoras", allEdits)}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog
          style={{
            width: "0.8rem",
            height: "0.8rem",
            marginTop: "5px",
            marginRight: "3px",
          }}
        />
        <p>Editar cuentas administradoras:</p>{" "}
        {dynamicIcons(false, "Editar cuentas administradoras", allEdits)}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog
          style={{
            width: "0.8rem",
            height: "0.8rem",
            marginTop: "5px",
            marginRight: "3px",
          }}
        />
        <p>Crear cuentas administradoras:</p>{" "}
        {dynamicIcons(false, "Crear cuentas administradoras", allEdits)}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog
          style={{
            width: "0.7rem",
            height: "0.7rem",
            marginTop: "5px",
            marginRight: "3px",
          }}
        />
        <p>Eliminar cuentas administradoras:</p>{" "}
        {dynamicIcons(false, "Eliminar cuentas administradoras", allEdits)}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog
          style={{
            width: "0.8rem",
            height: "0.8rem",
            marginTop: "5px",
            marginRight: "3px",
          }}
        />
        <p>Ver roles administrativos:</p>{" "}
        {dynamicIcons(false, "Ver roles administrativos", allEdits)}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog
          style={{
            width: "0.8rem",
            height: "0.8rem",
            marginTop: "5px",
            marginRight: "3px",
          }}
        />
        <p>Editar roles administrativos:</p>{" "}
        {dynamicIcons(false, "Editar roles administrativos", allEdits)}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog
          style={{
            width: "0.8rem",
            height: "0.8rem",
            marginTop: "5px",
            marginRight: "3px",
          }}
        />
        <p>Crear roles administrativos:</p>{" "}
        {dynamicIcons(false, "Crear roles administrativos", allEdits)}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog
          style={{
            width: "0.8rem",
            height: "0.8rem",
            marginTop: "5px",
            marginRight: "3px",
          }}
        />
        <p>Eliminar roles administrativos:</p>{" "}
        {dynamicIcons(false, "Eliminar roles administrativos", allEdits)}
      </div>
    </Card>
  );
};

export default Administracion;

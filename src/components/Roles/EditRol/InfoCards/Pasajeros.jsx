import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { dynamicIcons } from "../../PermissionsInfo/dynamicIcons";

const Pasajeros = ({ allEdits }) => {
  console.log(allEdits, "ALLEDITS");
  return (
    <Card
      title="Pasajeros"
      style={{
        width: 190,
        height: 320,
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
        <p>Ver pasajeros:</p> {dynamicIcons(false, "Ver pasajeros", allEdits)}
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
        <p>Editar pasajeros:</p>{" "}
        {dynamicIcons(false, "Editar pasajeros", allEdits)}
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
        <p>Bloquear pasajeros:</p>{" "}
        {dynamicIcons(false, "Bloquear pasajeros", allEdits)}
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
        <p>Eliminar pasajeros:</p>{" "}
        {dynamicIcons(false, "Eliminar pasajeros", allEdits)}
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
        <p>Exportar pasajeros:</p>{" "}
        {dynamicIcons(false, "Exportar pasajeros", allEdits)}
      </div>
    </Card>
  );
};

export default Pasajeros;

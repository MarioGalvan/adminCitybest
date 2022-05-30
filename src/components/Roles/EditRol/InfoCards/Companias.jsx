import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { dynamicIcons } from "../../PermissionsInfo/dynamicIcons";

const Companias = ({ allEdits }) => {
  return (
    <Card
      title="Companias"
      style={{
        width: 280,
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
        <p>Ver compañías aseguradoras:</p>{" "}
        {dynamicIcons(false, "Ver compañías aseguradoras", allEdits)}
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
        <p>Editar compañías aseguradoras:</p>{" "}
        {dynamicIcons(false, "Editar compañías aseguradoras", allEdits)}
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
        <p>Crear compañías aseguradoras:</p>{" "}
        {dynamicIcons(false, "Crear compañías aseguradoras", allEdits)}
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
        <p>Eliminar compañías aseguradoras:</p>{" "}
        {dynamicIcons(false, "Eliminar compañías aseguradoras", allEdits)}
      </div>
    </Card>
  );
};

export default Companias;

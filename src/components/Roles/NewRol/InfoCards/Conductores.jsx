import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { dynamicIcons } from "../../PermissionsInfo/dynamicIcons";

const Conductores = ({ allEdits }) => {
  return (
    <Card
      title="Conductores"
      style={{
        width: 255,
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
        <p>Ver conductores:</p> {dynamicIcons(false, "LIST_DRIVERS", allEdits)}
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
        <p>Editar conductores:</p>{" "}
        {dynamicIcons(false, "EDIT_DRIVERS", allEdits)}
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
        <p>Aprobar/rechazar documentos:</p>{" "}
        {dynamicIcons(false, "CHECK_DRIVER_DOCUMENTS", allEdits)}
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
        <p>Bloquear conductores:</p>{" "}
        {dynamicIcons(false, "BLOCK_DRIVERS", allEdits)}
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
        <p>Eliminar conductores:</p>{" "}
        {dynamicIcons(false, "DELETE_DRIVERS", allEdits)}
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
        <p>Exportar conductores:</p>{" "}
        {dynamicIcons(false, "EXPORT_DRIVERS", allEdits)}
      </div>
    </Card>
  );
};

export default Conductores;

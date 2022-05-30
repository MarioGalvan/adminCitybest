import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { dynamicIcons } from "../../PermissionsInfo/dynamicIcons";

const Marcas = ({ allEdits }) => {
  return (
    <Card
      title="Marcas"
      style={{
        width: 250,
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
        <p>Ver marca de vehículos:</p>{" "}
        {dynamicIcons(false, "LIST_CAR_BRAND", allEdits)}
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
        <p>Editar marca de vehículos:</p>{" "}
        {dynamicIcons(false, "EDIT_CAR_BRAND", allEdits)}
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
        <p>Crear marca de vehículos:</p>{" "}
        {dynamicIcons(false, "CREATE_CAR_BRAND", allEdits)}
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
        <p>Eliminar marca de vehículos:</p>{" "}
        {dynamicIcons(false, "DELETE_CAR_BRAND", allEdits)}
      </div>
    </Card>
  );
};

export default Marcas;

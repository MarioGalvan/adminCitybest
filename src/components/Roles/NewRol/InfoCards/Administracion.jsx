import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
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
        {dynamicIcons(false, "LIST_ADMINS", allEdits)}
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
        {dynamicIcons(false, "EDIT_ADMINS", allEdits)}
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
        {dynamicIcons(false, "CREATE_ADMINS", allEdits)}
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
        {dynamicIcons(false, "DELETE_ADMINS", allEdits)}
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
        {dynamicIcons(false, "LIST_ADMIN_ROLES", allEdits)}
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
        {dynamicIcons(false, "EDIT_ADMIN_ROLES", allEdits)}
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
        {dynamicIcons(false, "CREATE_ADMIN_ROLES", allEdits)}
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
        {dynamicIcons(false, "DELETE_ADMIN_ROLES", allEdits)}
      </div>
    </Card>
  );
};

export default Administracion;

import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const Administracion = () => {
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
        <ImCross
          style={{
            width: "0.7rem",
            height: "0.7rem",
            marginTop: "6px",
            marginLeft: "5px",
            color: "red",
          }}
        />
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
        <TiTick
          style={{
            width: "1.4rem",
            height: "1.4rem",
            marginLeft: "5px",
            color: "green",
          }}
        />
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
        <ImCross
          style={{
            width: "0.7rem",
            height: "0.7rem",
            marginTop: "6px",
            marginLeft: "5px",
            color: "red",
          }}
        />
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
        <TiTick
          style={{
            width: "1.4rem",
            height: "1.4rem",
            marginLeft: "5px",
            color: "green",
          }}
        />
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
        <ImCross
          style={{
            width: "0.7rem",
            height: "0.7rem",
            marginTop: "6px",
            marginLeft: "5px",
            color: "red",
          }}
        />
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
        <ImCross
          style={{
            width: "0.7rem",
            height: "0.7rem",
            marginTop: "6px",
            marginLeft: "5px",
            color: "red",
          }}
        />
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
        <ImCross
          style={{
            width: "0.7rem",
            height: "0.7rem",
            marginTop: "6px",
            marginLeft: "5px",
            color: "red",
          }}
        />
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
        <ImCross
          style={{
            width: "0.7rem",
            height: "0.7rem",
            marginTop: "6px",
            marginLeft: "5px",
            color: "red",
          }}
        />
      </div>
    </Card>
  );
};

export default Administracion;

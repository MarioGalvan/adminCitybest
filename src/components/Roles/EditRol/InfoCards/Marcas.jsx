import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const Marcas = () => {
  return (
    <Card
      title="Marcas"
      style={{
        width: 250,
        height: 320
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
        <p>Editar marca de vehículos:</p>{" "}
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
        <p>Crear marca de vehículos:</p>{" "}
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
        <p>Eliminar marca de vehículos:</p>{" "}
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
        <p>Exportar pasajeros:</p>{" "}
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

export default Marcas;

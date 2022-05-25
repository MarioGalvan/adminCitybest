import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const HuellaDeCarbono = () => {
  return (
    <Card
      title="Huella de carbono"
      style={{
        width: 200,
        height: 140
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
        <p>Ver estadísticas:</p>{" "}
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

export default HuellaDeCarbono;

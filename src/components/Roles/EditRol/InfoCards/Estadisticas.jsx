import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { dynamicIcons } from "../../PermissionsInfo/dynamicIcons";

const Estadisticas = ({ allEdits }) => {
  return (
    <Card
      title="Estadisticas"
      style={{
        width: 190,
        height: 140,
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
        {dynamicIcons(false, "Ver estadísticas", allEdits)}
      </div>
    </Card>
  );
};

export default Estadisticas;

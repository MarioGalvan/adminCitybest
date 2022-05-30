import React from "react";
import { Card } from "antd";
import { VscDebugBreakpointLog } from "react-icons/vsc";
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
        <p>Ver estadísticas:</p> {dynamicIcons(false, "SEE_STATS", allEdits)}
      </div>
    </Card>
  );
};

export default Estadisticas;

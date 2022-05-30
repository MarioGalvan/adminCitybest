import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { dynamicIcons } from "./dynamicIcons";

const PermissionsEstadisticas = () => {
  const { currentRol } = useSelector((state) => state["roles"]);

  return (
    <div className={styles.containerPermissions}>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Ver estadísticas:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "SEE_STATS",
          currentRol.permissions
        )}
      </div>
    </div>
  );
};

export default PermissionsEstadisticas;

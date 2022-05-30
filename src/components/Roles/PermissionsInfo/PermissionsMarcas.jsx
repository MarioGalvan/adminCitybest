import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { dynamicIcons } from "./dynamicIcons";

const PermissionsMarcas = () => {
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
        <p>Ver marca de vehículos:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "LIST_CAR_BRAND",
          currentRol.permissions
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Editar marca de vehículos:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "EDIT_CAR_BRAND",
          currentRol.permissions
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Crear marca de vehículos:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "CREATE_CAR_BRAND",
          currentRol.permissions
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Eliminar marca de vehículos:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "DELETE_CAR_BRAND",
          currentRol.permissions
        )}
      </div>
    </div>
  );
};

export default PermissionsMarcas;

import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { dynamicIcons } from "./dynamicIcons";

const PermissionsPasajeros = () => {
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
        <p>Ver pasajeros:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "LIST_PASSENGERS",
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
        <p>Editar pasajeros:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "EDIT_PASSENGERS",
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
        <p>Bloquear pasajeros:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "BLOCK_PASSENGERS",
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
        <p>Eliminar pasajeros:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "DELETE_PASSENGERS",
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
        <p>Exportar pasajeros:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "EXPORT_PASSENGERS",
          currentRol.permissions
        )}
      </div>
    </div>
  );
};

export default PermissionsPasajeros;

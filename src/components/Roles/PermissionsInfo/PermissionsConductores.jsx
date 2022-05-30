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
        <p>Ver conductores:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "LIST_DRIVERS",
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
        <p>Editar conductores:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "EDIT_DRIVERS",
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
        <p>Aprobar/rechazar documentos:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "CHECK_DRIVER_DOCUMENTS",
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
        <p>Bloquear conductores:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "BLOCK_DRIVERS",
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
        <p>Eliminar conductores:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "DELETE_DRIVERS",
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
        <p>Exportar conductores:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "EXPORT_DRIVERS",
          currentRol.permissions
        )}
      </div>
    </div>
  );
};

export default PermissionsPasajeros;

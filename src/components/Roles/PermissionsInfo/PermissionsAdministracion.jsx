import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { dynamicIcons } from "./dynamicIcons";

const PermissionsAdministracion = () => {
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
        <p>Ver cuentas administradoras:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "LIST_ADMINS",
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
        <p>Editar cuentas administradoras:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "EDIT_ADMINS",
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
        <p>Crear cuentas administradoras:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "CREATE_ADMINS",
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
        <p>Eliminar cuentas administradoras:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "DELETE_ADMINS",
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
        <p>Ver roles administrativos:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "LIST_ADMIN_ROLES",
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
        <p>Editar roles administrativos:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "EDIT_ADMIN_ROLES",
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
        <p>Crear roles administrativos:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "CREATE_ADMIN_ROLES",
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
        <p>Eliminar roles administrativos:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "DELETE_ADMIN_ROLES",
          currentRol.permissions
        )}
      </div>
    </div>
  );
};

export default PermissionsAdministracion;

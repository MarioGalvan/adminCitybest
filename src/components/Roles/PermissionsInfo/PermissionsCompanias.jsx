import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { dynamicIcons } from "./dynamicIcons";

const PermissionsCompanias = () => {
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
        <p>Ver compañías aseguradoras:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "LIST_COMPANY_INSURANCE",
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
        <p>Editar compañías aseguradoras:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "EDIT_COMPANY_INSURANCE",
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
        <p>Crear compañías aseguradoras:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "CREATE_COMPANY_INSURANCE",
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
        <p>Eliminar compañías aseguradoras:</p>{" "}
        {dynamicIcons(
          currentRol.isSuperAdmin,
          "DELETE_COMPANY_INSURANCE",
          currentRol.permissions
        )}
      </div>
    </div>
  );
};

export default PermissionsCompanias;

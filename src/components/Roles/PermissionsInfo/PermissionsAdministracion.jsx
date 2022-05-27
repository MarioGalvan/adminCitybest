import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import styles from "./styles.module.css";

const PermissionsAdministracion = () => {
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
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Editar cuentas administradoras:</p>{" "}
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
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Crear cuentas administradoras:</p>{" "}
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
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Eliminar cuentas administradoras:</p>{" "}
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
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Ver roles administrativos:</p>{" "}
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
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Editar roles administrativos:</p>{" "}
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
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Crear roles administrativos:</p>{" "}
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
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>Eliminar roles administrativos:</p>{" "}
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
    </div>
  );
};

export default PermissionsAdministracion;

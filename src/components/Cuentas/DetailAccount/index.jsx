import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div className={styles.containerDetailAccount}>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>
          Email: <span>facu@gmail.com</span>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>
          Nombre: <span>Facundo</span>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>
          Apellido: <span>Ramírez</span>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <VscDebugBreakpointLog className={styles.vsIcon} />
        <p>
          Rol: <span>Super Admin</span>
        </p>
      </div>
    </div>
  );
};

export default index;

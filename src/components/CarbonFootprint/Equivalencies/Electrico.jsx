import React from "react";
import styles from "../styles.module.css";
import { IoCarSport } from "react-icons/io5";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { COLORPRIMARY } from "../../../Hooks/constants";

const Hibrido = () => {
  return (
    <section
      style={{
        display: "flex",
        width: "30%",
        flexFlow: "column wrap",
        border: "1px solid rgba(240, 240, 240, 0.7)",
        backgroundColor: "rgba(240, 240, 240, 0.7)",
        padding: "15px",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: 'center'
        }}
      >
        <IoCarSport
          style={{
            fontSize: "2rem",
            marginRight: "8px",
            color: `${COLORPRIMARY}`,
          }}
        />
        <span
          style={{
            fontSize: "1.2rem",
            color: `${COLORPRIMARY}`,
          }}
        >
          Eléctrico
        </span>
      </div>
      <div>
        <p
          style={{
            display: "flex",
            fleFlow: "row wrap",
            alignItems: "center",
            margin: "0px auto",
            width: "fit-content",
          }}
        >
          <VscDebugBreakpointLog />
          <span>100t = 100km</span>
        </p>
        <p
          style={{
            display: "flex",
            fleFlow: "row wrap",
            alignItems: "center",
            margin: "0px auto",
            width: "fit-content",
          }}
        >
          <VscDebugBreakpointLog />
          <span>200t = 200km</span>
        </p>
        <p
          style={{
            display: "flex",
            fleFlow: "row wrap",
            alignItems: "center",
            margin: "0px auto",
            width: "fit-content",
          }}
        >
          <VscDebugBreakpointLog />
          <span>300t = 300km</span>
        </p>
        <p
          style={{
            display: "flex",
            fleFlow: "row wrap",
            alignItems: "center",
            margin: "0px auto",
            width: "fit-content",
          }}
        >
          <VscDebugBreakpointLog />
          <span>400t = 400km</span>
        </p>
        <p
          style={{
            display: "flex",
            fleFlow: "row wrap",
            alignItems: "center",
            margin: "0px auto",
            width: "fit-content",
          }}
        >
          <VscDebugBreakpointLog />
          <span>500t = 500km</span>
        </p>
      </div>
    </section>
  );
};

export default Hibrido;

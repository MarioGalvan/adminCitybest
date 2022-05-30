import React from 'react';
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

export const dynamicIcons = (superAdmin, permission, permitList) => {
  if (superAdmin) {
    return (
      <TiTick
        style={{
          width: "1.4rem",
          height: "1.4rem",
          marginLeft: "5px",
          color: "green",
        }}
      />
    );
  } else if (permitList.includes(permission)) {
    return (
      <TiTick
        style={{
          width: "1.4rem",
          height: "1.4rem",
          marginLeft: "5px",
          color: "green",
        }}
      />
    );
  } else {
    return (
      <ImCross
        style={{
          width: "0.7rem",
          height: "0.7rem",
          marginTop: "6px",
          marginLeft: "5px",
          color: "red",
        }}
      />
    );
  }
};

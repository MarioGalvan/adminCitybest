import React from "react";
import { Card, Modal, Button } from "antd";
import { CarOutlined, DoubleRightOutlined } from "@ant-design/icons";
import ModalApproveDriver from "./ModalApproveDriver";

export const CardComponent = ({
  id,
  documentsApproved,
  carBrand,
  carModel,
  carType,
  carYear,
  patent,
  setvisible,
  setRefresh
}) => {
  const StylesSpan = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <Card
      title={carBrand}
      extra={
        !documentsApproved && (
          <a href="#">
            <ModalApproveDriver id={id} setvisible={setvisible} setRefresh={setRefresh}/>
          </a>
        )
      }
      style={{
        width: 300,
        height: 300,
        boxShadow: "3px 3px 3px gray",
        marginBottom: "1rem",
      }}
    >
      <p>
        <DoubleRightOutlined /> <span style={StylesSpan}>Modelo:</span>
        {"  "}
        {carModel}
      </p>
      <p>
        <DoubleRightOutlined /> <span style={StylesSpan}>Tipo:</span>
        {"  "}
        {carType}
      </p>
      <p>
        <DoubleRightOutlined /> <span style={StylesSpan}>Año:</span>
        {"  "}
        {carYear}
      </p>
      <p>
        <DoubleRightOutlined /> <span style={StylesSpan}>Patente:</span>
        {"  "}
        {patent}
      </p>
    </Card>
  );
};

export default ModalApproveDriver;

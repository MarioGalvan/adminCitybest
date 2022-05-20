import React, { useState } from "react";
import { Modal, Button, Typography } from "antd";
import { COLORPRIMARY } from "../../../Hooks/constants";
// import { CarOutlined, DoubleRightOutlined } from "@ant-design/icons";
// import { GiCommercialAirplane, GiPineTree } from "react-icons/gi";
// import { RiHotelFill } from "react-icons/ri";
// import { FaFutbol } from "react-icons/fa";
// import { AiTwotoneHome } from "react-icons/ai";
import styles from "../styles.module.css";
import Electrico from "./Electrico";
import Hibrido from "./Hibrido";
import Gas from "./Gas";

const Equivalencies = () => {
  const [visible, setVisible] = useState(false);
  const { Title } = Typography;

  return (
    <div className={styles.containerEquivalencies}>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{
          backgroundColor: `${COLORPRIMARY}`,
          border: `1px solid ${COLORPRIMARY}`,
        }}
      >
        Ver equivalencias (KM/t)
      </Button>
      <Modal
        // title="La información proporcionada en el gráfico relativa a la huella de carbono equivale al siguiente consumo"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={650}
        cancelButtonProps={{ style: { display: "none" } }}
        okText="OK"
        className={styles.containerModalEquivalencies}
      >
        <span
          style={{ fontSize: "1rem", fontWeigth: "normal", marginTop: "15px" }}
        >
          Cuadro informativo sobre equivalencias de Toneladas en KM recorridos,
          expresado por tipo de vehículo.
        </span>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          <Electrico />
          <Hibrido />
          <Gas />
        </div>
      </Modal>
    </div>
  );
};

export default Equivalencies;

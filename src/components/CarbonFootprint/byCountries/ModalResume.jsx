import React, { useState } from "react";
import { Modal, Button, Typography } from "antd";
import { COLORPRIMARY } from "../../../Hooks/constants";
// import { CarOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { GiCommercialAirplane, GiPineTree } from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { FaFutbol } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";

const App = () => {
  const [visible, setVisible] = useState(false);
  const { Title } = Typography;
  return (
    <>
      <Button
        type="primary"
        block
        onClick={() => setVisible(true)}
        style={{
          marginTop: "1.5rem",
          backgroundColor: `${COLORPRIMARY}`,
          border: `1px solid ${COLORPRIMARY}`,
        }}
      >
        VER RESÚMEN
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
      >
        <span style={{ fontSize: '1rem', fontWeigth: "normal", marginTop: '13px' }}>
          La información proporcionada en el gráfico relativa a la huella de
          carbono, supondría un ahorro equivalente en toneladas a los siguientes
          parámetros:
        </span>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          <section style={{ width: "30%" }}>
            <div
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                color: `${COLORPRIMARY}`,
                fontSize: "3rem",
              }}
            >
              <GiCommercialAirplane />
              <p style={{ margin: "0px", marginTop: "10px" }}>
                103 Vuelos nacionales
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                color: `${COLORPRIMARY}`,
                fontSize: "3rem",
                marginTop: "2rem",
              }}
            >
              <GiPineTree />
              <p style={{ margin: "0px", marginTop: "10px" }}>
                112 Hectáreas de árboles
              </p>
            </div>
          </section>
          <section style={{ width: "30%" }}>
            <div
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                color: `${COLORPRIMARY}`,
                fontSize: "3rem",
              }}
            >
              <FaFutbol />
              <p style={{ margin: "0px", marginTop: "10px" }}>
                Gastos de 21 Estadios
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                color: `${COLORPRIMARY}`,
                fontSize: "3rem",
                marginTop: "2rem",
              }}
            >
              <RiHotelFill />
              <p style={{ margin: "0px", marginTop: "10px" }}>
                Consumo 39 Hoteles
              </p>
            </div>
          </section>
          <section style={{ width: "30%" }}>
            <div
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                color: `${COLORPRIMARY}`,
                fontSize: "3rem",
              }}
            >
              <AiTwotoneHome />
              <p style={{ margin: "0px", marginTop: "10px" }}>
                Consumo de 107 Hogares
              </p>
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default App;

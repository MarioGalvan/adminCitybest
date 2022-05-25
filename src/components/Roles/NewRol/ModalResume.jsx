import { Button, Modal, Typography } from "antd";
import { useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Pasajeros from "./InfoCards/Pasajeros";
import Conductores from "./InfoCards/Conductores";
import Estadisticas from "./InfoCards/Estadisticas";
import Companias from "./InfoCards/Companias";
import Marcas from "./InfoCards/Marcas";
import Administracion from "./InfoCards/Administracion";
import HuellasDeCarbono from "./InfoCards/HuellasDeCarbono";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const App = ({ isModalVisible, setIsModalVisible }) => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { Title } = Typography;

  return (
    <>
      <Modal
        // title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className={styles.containerModal}>
          <Title level={5}>
            Cuadro resúmen con las características del Rol a guardar.
          </Title>
          <section className={styles.sectionParameters}>
            <div
              style={{
                flexBasis: "24%",
                display: "flex",
                flexFlow: "column wrap",
                padding: "12px",
                marginTop: "1rem",
              }}
            >
              <Pasajeros />
            </div>
            <div
              style={{
                flexBasis: "24%",
                display: "flex",
                flexFlow: "column wrap",
                padding: "12px",
                marginTop: "1rem",
              }}
            >
              <Conductores />
            </div>

            <div
              style={{
                flexBasis: "24%",
                display: "flex",
                flexFlow: "column wrap",
                padding: "12px",
                marginTop: "1rem",
              }}
            >
              <Marcas />
            </div>

            <div
              style={{
                flexBasis: "24%",
                display: "flex",
                flexFlow: "column wrap",
                padding: "12px",
                marginTop: "1rem",
              }}
            >
              <Companias />
            </div>
            <div>
              <div
                style={{
                  flexBasis: "24%",
                  display: "flex",
                  flexFlow: "column wrap",
                  padding: "12px",
                  marginTop: "1rem",
                }}
              >
                <Estadisticas />
              </div>
              <div
                style={{
                  flexBasis: "24%",
                  display: "flex",
                  flexFlow: "column wrap",
                  padding: "12px",
                  marginTop: "1rem",
                }}
              >
                <HuellasDeCarbono />
              </div>
            </div>

            <div
              style={{
                flexBasis: "24%",
                display: "flex",
                flexFlow: "column wrap",
                padding: "12px",
                marginTop: "1rem",
              }}
            >
              <Administracion />
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default App;

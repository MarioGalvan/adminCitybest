import { Modal, Typography } from "antd";
import styles from "./styles.module.css";
import Pasajeros from "./InfoCards/Pasajeros";
import Conductores from "./InfoCards/Conductores";
import Estadisticas from "./InfoCards/Estadisticas";
import Companias from "./InfoCards/Companias";
import Marcas from "./InfoCards/Marcas";
import Administracion from "./InfoCards/Administracion";
import HuellasDeCarbono from "./InfoCards/HuellasDeCarbono";


const ModalResume = ({ isModalVisible, setIsModalVisible, allEdits }) => {
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
              <Pasajeros allEdits={allEdits} />
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
              <Conductores allEdits={allEdits} />
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
              <Marcas allEdits={allEdits} />
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
              <Companias allEdits={allEdits} />
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
                <Estadisticas allEdits={allEdits} />
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
                <HuellasDeCarbono allEdits={allEdits} />
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
              <Administracion allEdits={allEdits} />
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default ModalResume;

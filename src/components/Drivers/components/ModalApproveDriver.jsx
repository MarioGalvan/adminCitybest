import React, { useEffect, useState } from "react";
import { Modal, Button, Select, Spin } from "antd";
import Success from "./Success";
import styles from "./styles.module.css";
import { confirmDocs } from "./helpers/requests";

const ModalApproveDriver = ({ id, setvisible, setRefresh }) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const [modalText, setModalText] = React.useState(
    "Selecciona la categoría para el conductor"
  );
  const { Option } = Select;
  const [option, setOption] = useState("");
  let refresh = 1;

  function handleChange(value) {
    setOption(value);
  }

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // Modal.success({
    //   content: "Conductor aprobado exitosamente!",
    //   onOk: () => {
    //     handleCancel();
    //     setvisible(false);
    //     setRefresh(!refresh);
    //   },
    // });

    confirmDocs(id, option, setModalText, setConfirmLoading, setvisible, handleCancel, refresh, setRefresh);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className={styles.modalResume}>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          backgroundColor: "#441a7b",
          border: "1px solid #441a7b",
        }}
      >
        APROBAR
      </Button>
      <Modal
        title="Aprobar documentos"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width="400px"
        okText={modalText.charAt(0) !== "U" ? "Confirmar" : "Procesando"}
        cancelText="Cancelar"
        className={styles.modalApproveDocs}
      >
        <p
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            
          }}
        >
          {modalText}
          <div>
            {modalText.charAt(0) === "U" && <Spin className={styles.spinner} />}
          </div>
        </p>
        {modalText.charAt(0) !== "U" && (
          <Select
            defaultValue="Economic Gas"
            style={{ width: "50%", marginLeft: "25%" }}
            onChange={handleChange}
          >
            <Option value="city_economic">Economic Gas</Option>
            <Option value="city_electric">Ecológico Eléctrico</Option>
            <Option value="city_ecologic">Taxi ecológico</Option>
          </Select>
        )}
      </Modal>
    </div>
  );
};

export default ModalApproveDriver;

import { CarOutlined, FileProtectOutlined } from "@ant-design/icons";
import { Modal, Tabs, Button } from "antd";
import React from "react";
import { DriverCarInfo } from "../Drivers/DriverCarInfo";
import { DriverDocuments } from "../Drivers/DriverDocuments";
import styles from "./ModalPreview.module.css";

const { TabPane } = Tabs;
export const ModalPreviewDriver = ({ previewModal, setvisible, setRefresh }) => {
  //console.log("🚀 ~ file: ModalPreviewDriver.jsx ~ line 11 ~ ModalPreviewDriver ~ previewModal", previewModal)
  console.log(previewModal, "previewModal");
  const showModal = () => {
    alert("hola");
  };
  return (
    <>
      <Modal
        width={1000}
        footer={null}
        visible={previewModal.visible}
        onCancel={() => setvisible(!previewModal.visible)}
        onOk={showModal}
      >
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <FileProtectOutlined />
                Documentos del conductor
              </span>
            }
            key="1"
          >
            <DriverDocuments driverInformation={previewModal.data ?? []} />
          </TabPane>
          <TabPane
            tab={
              <span>
                <CarOutlined />
                Información del vehiculo
              </span>
            }
            key="2"
          >
            <DriverCarInfo driverInformation={previewModal.data ?? []} setvisible={setvisible} setRefresh={setRefresh}/>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

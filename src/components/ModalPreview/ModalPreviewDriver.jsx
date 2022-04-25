import {
    CarOutlined,
    FileProtectOutlined,
} from "@ant-design/icons";
import { Modal, Tabs } from "antd";
import React from "react";
import { DriverCarInfo } from "../Drivers/DriverCarInfo";
import { DriverDocuments } from "../Drivers/DriverDocuments";
const { TabPane } = Tabs;
export const ModalPreviewDriver = ({ previewModal, setvisible }) => {
console.log("🚀 ~ file: ModalPreviewDriver.jsx ~ line 11 ~ ModalPreviewDriver ~ previewModal", previewModal)
    return (
        <Modal
            width={1000}
            footer={null}
            visible={previewModal.visible}
            onCancel={() => setvisible(!previewModal.visible)}
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
                    <DriverDocuments driverInformation={previewModal.data??[]} />
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
                    <DriverCarInfo />
                </TabPane>
            </Tabs>
        </Modal>
    );
};

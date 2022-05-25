import React, { useState } from "react";
import { Tabs, Typography, Space, Button, Input, Form, Divider } from "antd";
import { MdPersonAddAlt1 } from "react-icons/md";
import { COLORPRIMARY } from "../../../Hooks/constants";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { UserOutlined } from "@ant-design/icons";
import CheckPasajeros from "./Checkbox/CheckPasajeros";
import CheckConductores from "./Checkbox/CheckConductores";
import CheckEstadisticas from "./Checkbox/CheckEstadisticas";
import CheckCompanias from "./Checkbox/CheckCompanias";
import CheckMarcas from "./Checkbox/CheckMarcas";
import CheckAdministracion from "./Checkbox/CheckAdministracion";
import CheckHuellasDeCarbono from "./Checkbox/CheckHuellasDeCarbono";
import ModalResume from "./ModalResume";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const { Title } = Typography;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const NewRol = () => {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const resume = () => {
    setIsModalVisible(true);
  };

  const back = () => {
    history.push("/Roles");
  };

  return (
    <div className={styles.containerNewRol}>
      <Space
        direction="horizontal"
        style={{
          marginBottom: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
          }}
        >
          <MdPersonAddAlt1
            style={{
              width: "1.8rem",
              height: "1.8rem",
              color: `${COLORPRIMARY}`,
            }}
          />
          <Title
            level={5}
            style={{
              color: `${COLORPRIMARY}`,
              margin: "0px",
              marginLeft: "8px",
            }}
          >
            Complete los siguiente campos para agregar un nuevo rol
          </Title>
        </div>
        <Button className={styles.buttonBack} onClick={back}>
          Volver
        </Button>
      </Space>
      <Form
        name="basic"
        // labelCol={{
        //   span: 8,
        // }}
        // wrapperCol={{
        //   span: 16,
        // }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.form}
      >
        <Form.Item
          label="Rol:"
          name="username"
          rules={[
            {
              required: true,
              message: "Por favor, ingrese el nombre del Rol.",
            },
          ]}
          span={12}
          prefix={
            <UserOutlined
              style={{ color: "rgba(68, 26, 123, 1)" }}
              className="site-form-item-icon"
            />
          }
          className={styles.labelRol}
          //   hasFeedback
        >
          <Input placeholder="Nombre del rol" className={styles.inputNewRol} />
        </Form.Item>

        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Pasajeros" key="1">
            <CheckPasajeros />
          </TabPane>
          <TabPane tab="Conductores" key="2">
            <CheckConductores />
          </TabPane>
          <TabPane tab="Estadísticas" key="3">
            <CheckEstadisticas />
          </TabPane>
          <TabPane tab="Compañías aseguradoras" key="4">
            <CheckCompanias />
          </TabPane>
          <TabPane tab="Marca de vehículos" key="5">
            <CheckMarcas />
          </TabPane>
          <TabPane tab="Administración" key="6">
            <CheckAdministracion />
          </TabPane>
          <TabPane tab="Huellas de Carbono" key="7">
            <CheckHuellasDeCarbono />
          </TabPane>
        </Tabs>
        <Divider />
        <Form.Item
          wrapperCol={{
            // offset: 8,
            span: 24,
          }}
        >
          <div className={styles.divButtons}>
            <Button
              type="primary"
              className={styles.buttonSave}
              onClick={resume}
            >
              Ver resúmen
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.buttonSave}
            >
              Guardar
            </Button>
            <ModalResume
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewRol;

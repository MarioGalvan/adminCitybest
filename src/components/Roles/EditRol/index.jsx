import React, { useEffect, useState } from "react";
import { Tabs, Typography, Space, Button, Input, Form, Divider } from "antd";
import { TiEdit } from "react-icons/ti";
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
import { useSelector } from "react-redux";
import {
  currentPassengers,
  currentDrivers,
  currentStatistics,
  currentCompanies,
  currentBrands,
  currentAdministration,
  currentCarbonFootPrints,
} from "./helpers/currentPermissions";
import { convertDataToEdit } from "./helpers/convertData";
import { editRol, warningRol } from "./helpers/alerts";

const { TabPane } = Tabs;

const onChange = (key) => {
  // console.log(key);
};

const { Title } = Typography;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const EditRol = ({ backEdit, setViewRol, setEditP }) => {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { currentRol } = useSelector((state) => state["roles"]);
  const [editPassengers, setEditPassengers] = useState([]);
  const [editDrivers, setEditDrivers] = useState([]);
  const [editStatistics, setEditStatistics] = useState([]);
  const [editCompanies, setEditCompanies] = useState([]);
  const [editBrands, setEditBrands] = useState([]);
  const [editAdministration, setEditAdministration] = useState([]);
  const [editHuellasDeCarbono, setEditHuellasDeCarbono] = useState([]);
  const [allEdits, setAllEdits] = useState([]);
  const [nameEdit, setNameEdit] = useState();

  useEffect(() => {
    setAllEdits(currentRol.permissions);
    setEditPassengers(currentPassengers(currentRol.permissions));
    setEditDrivers(currentDrivers(currentRol.permissions));
    setEditStatistics(currentStatistics(currentRol.permissions));
    setEditCompanies(currentCompanies(currentRol.permissions));
    setEditBrands(currentBrands(currentRol.permissions));
    setEditAdministration(currentAdministration(currentRol.permissions));
    setEditHuellasDeCarbono(currentCarbonFootPrints(currentRol.permissions));

    setNameEdit(currentRol.name);
  }, []);

  useEffect(() => {
    setAllEdits([
      ...editPassengers,
      ...editDrivers,
      ...editStatistics,
      ...editCompanies,
      ...editBrands,
      ...editAdministration,
      ...editHuellasDeCarbono,
    ]);
  }, [
    editPassengers,
    editDrivers,
    editStatistics,
    editCompanies,
    editBrands,
    editAdministration,
    editHuellasDeCarbono,
  ]);

  const resume = () => {
    setIsModalVisible(true);
    let finalDataToResume = convertDataToEdit(allEdits);
  };

  const buttonEdit = () => {
    let permissions = convertDataToEdit(allEdits);
    let name = document.getElementById("nameRol").value;

    if (!name)
      return warningRol(
        "Nombre vacío",
        "Por favor, complete el nombre del rol antes de editar."
      );

    if (permissions.length === 0)
      return warningRol(
        "Permisos",
        "Por favor, seleccione al menos 1 permiso."
      );

    let finalDataToEdit = {
      name,
      permissions,
    };

    console.log(finalDataToEdit, "FINAL");

    editRol(
      name,
      currentRol.name,
      currentRol._id,
      finalDataToEdit,
      history,
      setViewRol,
      setEditP
    );
  };

  return (
    <div className={styles.containerEditRol}>
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
          <TiEdit
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
            Complete los siguiente campos para editar "{currentRol.name}"
          </Title>
        </div>
        <Button className={styles.buttonBack} onClick={backEdit}>
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
          <Input
            placeholder="Nombre del rol"
            className={styles.inputNewRol}
            defaultValue={currentRol.name}
            value={nameEdit}
            onChange={(e) => setNameEdit(e.target.value)}
            id="nameRol"
          />
        </Form.Item>

        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Pasajeros" key="1">
            <CheckPasajeros
              permissions={currentRol.permissions}
              setEditPassengers={setEditPassengers}
            />
          </TabPane>
          <TabPane tab="Conductores" key="2">
            <CheckConductores
              permissions={currentRol.permissions}
              setEditDrivers={setEditDrivers}
            />
          </TabPane>
          <TabPane tab="Estadísticas" key="3">
            <CheckEstadisticas
              permissions={currentRol.permissions}
              setEditStatistics={setEditStatistics}
            />
          </TabPane>
          <TabPane tab="Compañías aseguradoras" key="4">
            <CheckCompanias
              permissions={currentRol.permissions}
              setEditCompanies={setEditCompanies}
            />
          </TabPane>
          <TabPane tab="Marca de vehículos" key="5">
            <CheckMarcas
              permissions={currentRol.permissions}
              setEditBrands={setEditBrands}
            />
          </TabPane>
          <TabPane tab="Administración" key="6">
            <CheckAdministracion
              permissions={currentRol.permissions}
              setEditAdministration={setEditAdministration}
            />
          </TabPane>
          <TabPane tab="Huellas de Carbono" key="7">
            <CheckHuellasDeCarbono
              permissions={currentRol.permissions}
              setEditHuellasDeCarbono={setEditHuellasDeCarbono}
            />
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
              onClick={buttonEdit}
              className={styles.buttonSave}
            >
              Editar
            </Button>
            <ModalResume
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              allEdits={allEdits}
            />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditRol;

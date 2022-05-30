import React, { useState, useEffect } from "react";
import {
  Tabs,
  Typography,
  Space,
  Button,
  Input,
  Form,
  Divider,
  Switch,
} from "antd";
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
import { saveRol, warningRol } from "./alerts";
import Fade from "react-reveal/Fade";
import { notify } from "./toast";
import { permissions } from "../PermissionsInfo/permissions";
import { convertDataToEdit } from "../EditRol/helpers/convertData";

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
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [passengers, setPassengers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [brands, setBrands] = useState([]);
  const [administration, setAdministration] = useState([]);
  const [carbonFootPrints, setCarbonFootPrints] = useState([]);
  const [allEdits, setAllEdits] = useState([]);
  const [switchOn, setSwitchOn] = useState(false);

  useEffect(() => {
    setData([
      ...passengers,
      ...drivers,
      ...statistics,
      ...companies,
      ...brands,
      ...administration,
      ...carbonFootPrints,
    ]);
  }, [
    name,
    passengers,
    drivers,
    statistics,
    companies,
    brands,
    administration,
    carbonFootPrints,
  ]);

  useEffect(() => {
    setAllEdits([
      ...passengers,
      ...drivers,
      ...statistics,
      ...companies,
      ...brands,
      ...administration,
      ...carbonFootPrints,
    ]);
  }, [
    passengers,
    drivers,
    statistics,
    companies,
    brands,
    administration,
    carbonFootPrints,
  ]);

  useEffect(() => {
    if (switchOn) notify("success", "Se activó el 100% de los permisos.");
  }, [switchOn]);

  const resume = () => {
    setIsModalVisible(true);
    let finalDataToResume = convertDataToEdit(allEdits);
  };

  const onSwitchChange = (checked) => {
    setSwitchOn(checked);
  };

  const back = () => {
    history.push("/Roles");
  };

  const createRol = () => {
    let finalData = {};
    let permissionsData;
    if (switchOn) permissionsData = permissions;
    else permissionsData = data.filter((permission) => permission !== "");

    if (!name)
      return warningRol(
        "Rol vacío.",
        "Por favor, completa el nombre del rol antes de guardar."
      );

    if (permissionsData.length === 0)
      return warningRol(
        "Permisos",
        "Por favor, selecciona al menos un permiso."
      );

    finalData = {
      isSuperAdmin: switchOn ? true : false,
      name,
      permissions: permissionsData,
    };

    console.log(finalData, "FINAL");

    return saveRol(name, finalData, history);
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
        >
          <Input
            placeholder="Nombre del rol"
            className={styles.inputNewRol}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item span={2}>
          <Space direction="horizontal">
            <Title
              level={5}
              style={{ margin: "0px", color: `${COLORPRIMARY}` }}
            >
              Super Admin
            </Title>
            <div
              style={{ width: "12px", display: "flex", flexFlow: "row wrap" }}
            >
              <Switch
                defaultChecked={false}
                onChange={onSwitchChange}
                className={styles.switch}
                style={
                  switchOn
                    ? {
                        color: `${COLORPRIMARY}`,
                        backgroundColor: `${COLORPRIMARY}`,
                      }
                    : null
                }
              />
            </div>
          </Space>
        </Form.Item>
        {!switchOn && (
          <Fade>
            <Tabs
              defaultActiveKey="1"
              onChange={onChange}
              style={{ minHeight: "250px" }}
            >
              <TabPane tab="Pasajeros" key="1">
                <CheckPasajeros setPassengers={setPassengers} />
              </TabPane>
              <TabPane tab="Conductores" key="2">
                <CheckConductores setDrivers={setDrivers} />
              </TabPane>
              <TabPane tab="Estadísticas" key="3">
                <CheckEstadisticas setStatistics={setStatistics} />
              </TabPane>
              <TabPane tab="Compañías aseguradoras" key="4">
                <CheckCompanias setCompanies={setCompanies} />
              </TabPane>
              <TabPane tab="Marca de vehículos" key="5">
                <CheckMarcas setBrands={setBrands} />
              </TabPane>
              <TabPane tab="Administración" key="6">
                <CheckAdministracion setAdministration={setAdministration} />
              </TabPane>
              <TabPane tab="Huellas de Carbono" key="7">
                <CheckHuellasDeCarbono
                  setCarbonFootPrints={setCarbonFootPrints}
                />
              </TabPane>
            </Tabs>
          </Fade>
        )}
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
              // htmlType="submit"
              onClick={createRol}
              className={styles.buttonSave}
            >
              Guardar
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

export default NewRol;

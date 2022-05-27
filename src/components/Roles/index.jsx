import { Button, Space, Table, Typography, Tabs, Switch } from "antd";
import { useEffect, useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { COLORPRIMARY } from "../../Hooks/constants";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";
import PermissionsPasajeros from "./PermissionsInfo/PermissionsPasajeros";
import PermissionsConductores from "./PermissionsInfo/PermissionsConductores";
import PermissionsEstadisticas from "./PermissionsInfo/PermissionsEstadisticas";
import PermissionsCompanias from "./PermissionsInfo/PermissionsCompanias";
import PermissionsMarcas from "./PermissionsInfo/PermissionsMarcas";
import PermissionsAdministracion from "./PermissionsInfo/PermissionsAdministracion";
import PermissionsHuellasDeCarbono from "./PermissionsInfo/PermissionsHuellasDeCarbono";
import EditRol from "./EditRol";
import axios from "axios";
import { OrderedListOutlined } from "@ant-design/icons";
import PreloaderApp from '../Loader';

const { Title } = Typography;

const { TabPane } = Tabs;

const Roles = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [viewRol, setViewRol] = useState(false);
  const [editP, setEditP] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/admin-roles`)
      .then((response) => {
        let finalData = response.data
          .filter((rol) => rol.name)
          .map((role) => {
            return { id: role._id, name: role.name };
          });
        setData(finalData);
      })
      .catch((error) => console.log(error));
  }, [data]);

  const onChange = (key) => {
    console.log(key);
  };

  const history = useHistory();

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const detailRol = async (e) => {
    let id = data.find((item) => item.name === e.target.innerText).id;
    await axios
      .get(`${process.env.REACT_APP_BACKEND}/admin-roles/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    setViewRol(true);
  };

  const detailBack = () => {
    setViewRol(false);
  };

  const goToNewRol = () => {
    history.push("/Roles/Nuevo_Rol");
  };

  const editPermissions = () => {
    setViewRol(false);
    setEditP(true);
  };

  const backEdit = () => {
    setViewRol(true);
    setEditP(false);
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <div
      className={styles.containerRoles}
      style={editP ? { padding: "0rem" } : { padding: "1rem" }}
    >
      {!viewRol && !editP && (
        <div>
          <Space
            style={{
              marginBottom: 8,
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
              <IoIosPeople
                style={{
                  width: "1.8rem",
                  height: "1.8rem",
                  color: `${COLORPRIMARY}`,
                }}
              />{" "}
              <Title
                level={5}
                style={{
                  color: `${COLORPRIMARY}`,
                  margin: "0px",
                  marginLeft: "8px",
                }}
              >
                Listado de Roles
              </Title>
            </div>

            <Button className={styles.buttonNewRol} onClick={goToNewRol}>
              Nuevo rol
            </Button>
          </Space>
          <Table
            locale={{
              triggerDesc: "Click para orden descendente",
              triggerAsc: "Click para orden ascendente",
              cancelSort: "Click para cancelar orden",
              emptyText: <PreloaderApp />,
            }}
            columns={columns}
            dataSource={data}
            onChange={handleChange}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event, record, rowIndex) => {
                  detailRol(event);
                }, // click row
                // onDoubleClick: (event) => {}, // double click row
                // onContextMenu: (event) => {}, // right button click row
                // onMouseEnter: (event) => {}, // mouse enter row
                // onMouseLeave: (event) => {}, // mouse leave row
              };
            }}
          />
        </div>
      )}
      {viewRol && !editP && (
        <div>
          <Space
            style={{
              marginBottom: 8,
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
              <FaUser
                style={{
                  width: "1.1rem",
                  height: "1.1rem",
                  color: `${COLORPRIMARY}`,
                }}
              />{" "}
              <Title
                level={5}
                style={{
                  color: `${COLORPRIMARY}`,
                  margin: "0px",
                  marginLeft: "8px",
                }}
              >
                Permisos para "Super Admin"
              </Title>
            </div>

            <div>
              <Button
                className={styles.buttonNewRol}
                onClick={editPermissions}
                style={{ marginRight: "1rem" }}
              >
                Editar permisos
              </Button>
              <Button className={styles.buttonNewRol} onClick={detailBack}>
                Volver
              </Button>
            </div>
          </Space>

          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Pasajeros" key="1">
              <PermissionsPasajeros />
            </TabPane>
            <TabPane tab="Conductores" key="2">
              <PermissionsConductores />
            </TabPane>
            <TabPane tab="Estadísticas" key="3">
              <PermissionsEstadisticas />
            </TabPane>
            <TabPane tab="Compañías aseguradoras" key="4">
              <PermissionsCompanias />
            </TabPane>
            <TabPane tab="Marca de vehículos" key="5">
              <PermissionsMarcas />
            </TabPane>
            <TabPane tab="Administración" key="6">
              <PermissionsAdministracion />
            </TabPane>
            <TabPane tab="Huellas de Carbono" key="7">
              <PermissionsHuellasDeCarbono />
            </TabPane>
          </Tabs>
        </div>
      )}
      {editP && <EditRol backEdit={backEdit} />}
    </div>
  );
};

export default Roles;

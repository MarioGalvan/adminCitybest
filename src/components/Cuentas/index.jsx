import { Button, Space, Table, Typography, Tabs } from "antd";
import { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
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

const { Title } = Typography;

const data = [
  {
    key: "1",
    name: "facu@gmail.com",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "fernando@gmail.com",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "laura@gmail.com",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "francisco@gmail.com",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const { TabPane } = Tabs;

const Roles = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [viewRol, setViewRol] = useState(false);
  const [editP, setEditP] = useState(false);

  const onChange = (key) => {
    console.log(key);
  };

  const history = useHistory();

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const detailRol = (e) => {
    setViewRol(true);
  };

  const detailBack = () => {
    setViewRol(false);
  };

  const goToNewAccount = () => {
    history.push("/Cuentas/Nueva_Cuenta");
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
      //   filters: [
      //     {
      //       text: "Joe",
      //       value: "Joe",
      //     },
      //     {
      //       text: "Jim",
      //       value: "Jim",
      //     },
      //   ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    // {
    //   title: "Age",
    //   dataIndex: "age",
    //   key: "age",
    //   sorter: (a, b) => a.age - b.age,
    //   sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
    //   ellipsis: true,
    // },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   key: "address",
    //   filters: [
    //     {
    //       text: "London",
    //       value: "London",
    //     },
    //     {
    //       text: "New York",
    //       value: "New York",
    //     },
    //   ],
    //   filteredValue: filteredInfo.address || null,
    //   onFilter: (value, record) => record.address.includes(value),
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
    //   ellipsis: true,
    // },
  ];

  return (
    <div
      className={styles.containerAccounts}
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
              <RiUserSettingsFill
                style={{
                  width: "1.4rem",
                  height: "1.4rem",
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
                Listado de Cuentas Administrativas
              </Title>
            </div>

            <Button className={styles.buttonNewRol} onClick={goToNewAccount}>
              Nueva cuenta
            </Button>
            {/* <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button> */}
          </Space>
          <Table
            columns={columns}
            dataSource={data}
            onChange={handleChange}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
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

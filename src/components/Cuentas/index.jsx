import { Button, Space, Table, Typography, Tabs } from "antd";
import { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { COLORPRIMARY } from "../../Hooks/constants";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";
import EditAccount from "./EditAccount";
import DetailAccount from "./DetailAccount";
import Swal from 'sweetalert2';

const { Title } = Typography;

const data = [
  {
    key: "1",
    email: "facu@gmail.com",
    name: "Facundo",
    lastName: "Ramirez",
    rol: "Super Admin",
  },
  {
    key: "2",
    email: "laura@gmail.com",
    name: "Laura",
    lastName: "Benitez",
    rol: "Supervisor",
  },
  {
    key: "3",
    email: "pablo@gmail.com",
    name: "Pablo",
    lastName: "Fernandez",
    rol: "Super Admin",
  },
  {
    key: "4",
    email: "javier@gmail.com",
    name: "Javier",
    lastName: "Cassetai",
    rol: "Super Admin",
  },
];

const { TabPane } = Tabs;

const Accounts = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [viewAccount, setViewAccount] = useState(false);
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

  const detailAccount = (e) => {
    setViewAccount(true);
  };

  const detailBack = () => {
    setViewAccount(false);
  };

  const goToNewAccount = () => {
    history.push("/Cuentas/Nueva_Cuenta");
  };

  const editAccount = () => {
    setViewAccount(false);
    setEditP(true);
  };

  const deleteAccount = () => {
    Swal.fire({
      title: "¿Desea eliminar este administrador/a?",
      text: "Al aceptar esta operación se eliminará el administrador/a de manera definitiva",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#441a7b",
      cancelButtonColor: "#441a7b",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const backEdit = () => {
    setViewAccount(true);
    setEditP(false);
  };

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filteredValue: filteredInfo.email || null,
      onFilter: (value, record) => record.email.includes(value),
      sorter: (a, b) => {
        if (a.email > b.email) return 1;
        if (a.email < b.email) return -1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Apellido",
      dataIndex: "lastName",
      key: "lastName",
      filteredValue: filteredInfo.lastName || null,
      onFilter: (value, record) => record.lastName.includes(value),
      sorter: (a, b) => {
        if (a.lastName > b.lastName) return 1;
        if (a.lastName < b.lastName) return -1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === "lastName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Rol",
      dataIndex: "rol",
      key: "rol",
      filteredValue: filteredInfo.rol || null,
      onFilter: (value, record) => record.rol.includes(value),
      sorter: (a, b) => {
        if (a.rol > b.rol) return 1;
        if (a.rol < b.rol) return -1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === "rol" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <div
      className={styles.containerAccounts}
      style={editP ? { padding: "0rem" } : { padding: "1rem" }}
    >
      {!viewAccount && !editP && (
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
            <Button className={styles.buttonsPurple} onClick={goToNewAccount}>
              Nueva cuenta
            </Button>
          </Space>
          <Table
            // showSorterTooltip={{ title: "Click para ordenar" }}
            locale={{
              triggerDesc: "Click para orden descendente",
              triggerAsc: "Click para orden ascendente",
              cancelSort: "Click para cancelar orden",
            }}
            columns={columns}
            dataSource={data}
            onChange={handleChange}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  detailAccount(event);
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
      {viewAccount && !editP && (
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
                Detalle del administrador/a "Super Admin"
              </Title>
            </div>

            <div>
              <Button
                className={styles.buttonsPurple}
                onClick={deleteAccount}
                style={{ marginRight: "1rem" }}
              >
                Eliminar cuenta
              </Button>
              <Button
                className={styles.buttonsPurple}
                onClick={editAccount}
                style={{ marginRight: "1rem" }}
              >
                Editar cuenta
              </Button>
              <Button className={styles.buttonsPurple} onClick={detailBack}>
                Volver
              </Button>
            </div>
          </Space>

          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Detalle" key="1">
              <DetailAccount />
            </TabPane>
          </Tabs>
        </div>
      )}
      {!viewAccount && editP && <EditAccount backEdit={backEdit} />}
    </div>
  );
};

export default Accounts;

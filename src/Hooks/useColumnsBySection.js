import { CarOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Rate, Space, Tag, Tooltip } from "antd";
import Title from "antd/lib/skeleton/Title";

export const useColumnsBySection = (section, preview) => {
  switch (section) {
    case "passengers":
      return [
        {
          title: "Pasajero",
          dataIndex: "name",
          key: "name",
          width: "32%",
        },
        {
          title: "Telefono",
          dataIndex: "phone",
          key: "phone",
          width: "20%",
        },
        {
          title: "Status",
          dataIndex: "blocked",
          key: "blocked",
          render: (text, record) => {
            return (
              <>
                {record.blocked ? (
                  <Tag color="red">Blocked</Tag>
                ) : (
                  <Tag color="green">Active</Tag>
                )}
              </>
            );
          },
        },
        {
          title: "Acciones",
          key: "acciones",
          dataIndex: "acciones",
          render: (text, record) => (
            <Space size="middle">
              <Tooltip title="Ver detalle">
                <Button
                  onClick={() => {
                    preview(record);
                  }}
                  shape="circle"
                >
                  <EyeOutlined
                    style={{
                      fontSize: "20px",
                      padding: 10,
                    }}
                  />
                </Button>
              </Tooltip>
            </Space>
          ),
        },
      ];

    case "car-brands":
      return [
        {
          title: "#",
          dataIndex: "id",
          key: "id",
          width: "5%",
        },

        {
          title: "Marca",
          dataIndex: "name",
          key: "name",
          width: "50%",
          render: (text, record) => {
            return (
              <Space direction="horizontal">
                <CarOutlined />
                <p>{text}</p>
              </Space>
            );
          },
        },
      ];

    case "drivers":
      return [
        {
          title: "Conductor",
          dataIndex: "name",
          key: "name",
          width: "32%",
        },
        {
          title: "Telefono",
          dataIndex: "phone",
          key: "phone",
          width: "20%",
        },
        {
          title: "Rating",
          dataIndex: "rating",
          key: "rating",
          render: (text, record) => {
            return <Rate value={text} />;
          },
        },
        {
          title: "Documentos Aprobados",
          dataIndex: "documentsApproved",
          key: "documentsApproved",
          render: (text, record) => {
            //console.log("🚀 ~ file: useColumnsBySection.js ~ line 103 ~ useColumnsBySection ~ text", text)
            return (
              <>
                {!text ? (
                  <Tag color="red">No Aprobado</Tag>
                ) : (
                  <Tag color="green">Aprobado</Tag>
                )}
              </>
            );
          },
        },
        {
          title: "Acciones",
          key: "acciones",
          dataIndex: "acciones",
          render: (text, record) => (
            <Space size="middle">
              <Tooltip title="Ver detalle">
                <Button
                  onClick={() => {
                    preview(record);
                  }}
                  shape="circle"
                >
                  <EyeOutlined
                    style={{
                      fontSize: "20px",
                      padding: 10,
                    }}
                  />
                </Button>
              </Tooltip>
            </Space>
          ),
        },
      ];

    default:
  }
};

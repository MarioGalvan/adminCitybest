import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"

export const useColumnsBySection = (section) => {

    switch (section) {
        case "Interlocutores":
            return [
                {
                    title: "Interlocutor",
                    dataIndex: "name",
                    key: "name",
                    width: "32%",
                },
                {
                    title: "Cargo(s)",
                    dataIndex: "cargo",
                    key: "cargo",
                },

                {
                    title: "Descripción",
                    key: "description",
                    dataIndex: "description",
                },
                {
                    title: "Acciones",
                    key: "acciones",
                    dataIndex: "acciones",
                    render: (text, record) => (
                        <Space size="middle">
                            <Button shape="circle" icon={<EditOutlined />}>
                                Editar
                            </Button>
                            <Button type="danger" shape="circle" icon={<DeleteOutlined />}>
                                Eliminar
                            </Button>
                        </Space>
                    )
                }

            ]

        case 'Sabedorxs':
            return [
                {
                    title: "Interlocutor",
                    dataIndex: "name",
                    key: "name",
                    width: "32%",
                },
                {
                    title: "Cargo(s)",
                    dataIndex: "cargo",
                    key: "cargo",
                },

                {
                    title: "Descripción",
                    key: "description",
                    dataIndex: "description",
                },
                {
                    title: "Acciones",
                    key: "acciones",
                    dataIndex: "acciones",
                    render: (text, record) => (
                        <Space size="middle">
                            <Button shape="circle" icon={<EditOutlined />}>
                                Editar
                            </Button>
                            <Button type="danger" shape="circle" icon={<DeleteOutlined />}>
                                Eliminar
                            </Button>
                        </Space>
                    )
                }

            ]

            case 'Cuerpos':
                return [
                    {
                        title: "Cuerpo",
                        dataIndex: "name",
                        key: "name",
                        width: "32%",
                    },
    
                    {
                        title: "Descripción",
                        key: "description",
                        dataIndex: "description",
                    },
                    {
                        title: "Acciones",
                        key: "acciones",
                        dataIndex: "acciones",
                        render: (text, record) => (
                            <Space size="middle">
                                <Button shape="circle" icon={<EditOutlined />}>
                                    Editar
                                </Button>
                                <Button type="danger" shape="circle" icon={<DeleteOutlined />}>
                                    Eliminar
                                </Button>
                            </Space>
                        )
                    }
    
                ]

                case 'Regiones':
                    return [
                        {
                            title: "Region",
                            dataIndex: "name",
                            key: "name",
                            width: "32%",
                        },
        
                        {
                            title: "Descripción",
                            key: "description",
                            dataIndex: "description",
                        },
                        {
                            title: "Acciones",
                            key: "acciones",
                            dataIndex: "acciones",
                            render: (text, record) => (
                                <Space size="middle">
                                    <Button shape="circle" icon={<EditOutlined />}>
                                        Editar
                                    </Button>
                                    <Button type="danger" shape="circle" icon={<DeleteOutlined />}>
                                        Eliminar
                                    </Button>
                                </Space>
                            )
                        }
        
                    ]
        default:

    }

}
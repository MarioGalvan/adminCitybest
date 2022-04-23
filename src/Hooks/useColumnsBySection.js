import { EyeOutlined } from "@ant-design/icons"
import { Button, Space, Tag, Tooltip } from "antd"

export const useColumnsBySection = (section) => {

    switch (section) {
        case "passengers":
            return [
                {
                    title: "Passenger",
                    dataIndex: "name",
                    key: "name",
                    width: "32%",
                },
                {
                    title: 'Telefono',
                    dataIndex: 'phone',
                    key: 'phone',
                    width: '20%',
                },
                {
                    title: "Status",
                    dataIndex: "blocked",
                    key: "blocked",
                    render: (text, record) => {
                        return (
                            <>
                                {record.blocked ? <Tag color="red">Blocked</Tag> : <Tag color="green">Active</Tag>}
                            </>
                        )
                    }
                },
                {
                    title: "Acciones",
                    key: "acciones",
                    dataIndex: "acciones",
                    render: (text, record) => (
                        <Space size="middle">
                            <Tooltip title="Ver detalle">
                                <Button shape="circle">
                                    <EyeOutlined style={{
                                        fontSize: "20px",
                                        padding: 10
                                    }} />
                                </Button>
                            </Tooltip>

                        </Space>
                    )
                }

            ]

        default:

    }

}
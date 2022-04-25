import { CarOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tag, Typography } from "antd";
const { Title } = Typography;
export const useDataBySection = (section, data) => {
    switch (section) {
        case "passengers":
            return data.length ? data.map(item => {
                return {
                    name: (
                        <>
                            <Avatar.Group>
                                <Avatar
                                    className="shape-avatar"
                                    shape="square"
                                    size={40}
                                    icon={item?.profilePictureUrl == null && <UserOutlined />}
                                    src={item?.profilePictureUrl}
                                ></Avatar>
                                <div className="avatar-info">
                                    <Title level={5}>
                                        {`${item?.firstName ?? ''} ${item?.lastName ?? ''}`}
                                    </Title>
                                    <p>
                                        {item?.email}
                                    </p>
                                </div>
                            </Avatar.Group>{" "}
                        </>
                    ),
                    phone: item?.phone,
                    blocked: item?.blocked,
                    preview: item

                }
            }) : []

        case "car-brands":
            return data.length ? data.map((item, index) => {
                return {
                    name: item?.name,
                    id: index,
                }
            }) : []


            case "drivers":
            return data.length ? data.map(item => {
                return {
                    name: (
                        <>
                            <Avatar.Group>
                                <Avatar
                                    className="shape-avatar"
                                    shape="square"
                                    size={40}
                                    icon={item?.profilePictureUrl == null && <UserOutlined />}
                                    src={item?.profilePictureUrl}
                                ></Avatar>
                                <div className="avatar-info">
                                    <Title level={5}>
                                        {`${item?.firstName ?? ''} ${item?.lastName ?? ''}`}
                                    </Title>
                                    <p>
                                        {item?.email}
                                    </p>
                                </div>
                            </Avatar.Group>{" "}
                        </>
                    ),
                    phone: item?.phone,
                    blocked: item?.blocked,
                    preview: item,
                    driverType: item?.driverType,
                    documentsApproved:item?.documentsApproved,
                    rating:item?.rating

                }
            }) : []

        default:

    }

}
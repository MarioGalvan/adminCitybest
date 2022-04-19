import { Avatar, Tag, Typography } from "antd";
const { Title } = Typography;
export const useDataBySection = (section, data) => {
    switch (section) {
        case "Interlocutores":
            return data.length ? data.map(item => {
                return {
                    name: (
                        <>
                            <Avatar.Group>
                                <Avatar
                                    className="shape-avatar"
                                    shape="square"
                                    size={40}
                                    src={item.profilePicture ?? <Avatar.Icon icon="user" />}
                                ></Avatar>
                                <div className="avatar-info">
                                    <Title level={5}>{item.name}</Title>
                                    <p>{item.email || ''}</p>
                                </div>
                            </Avatar.Group>{" "}
                        </>
                    ),
                    cargo: (
                        <>
                            {item.cargo && item.cargo.map((cargo) => <Tag color="blue">{cargo}</Tag>)}
                        </>
                    ),
                    key: item.id,
                    description: item.description,
                }
            }) : []

        case 'Sabedorxs':
            return data.length ? data.map(item => {
                return {
                    name: (
                        <>
                            <Avatar.Group>
                                <Avatar
                                    className="shape-avatar"
                                    shape="square"
                                    size={40}
                                    src={item.profilePicture ?? <Avatar.Icon icon="user" />}
                                ></Avatar>
                                <div className="avatar-info">
                                    <Title level={5}>{item.name}</Title>
                                    <p>{item.email || ''}</p>
                                </div>
                            </Avatar.Group>{" "}
                        </>
                    ),
                    key: item.id,
                    description: item.description,
                }
            }) : []

        case 'Cuerpos':
            return data.length ? data.map(item => {
                return {
                    name: (
                        <>
                            <Avatar.Group>
                                <Avatar
                                    className="shape-avatar"
                                    shape="square"
                                    size={40}
                                    src={item.profilePicture ?? <Avatar.Icon icon="user" />}
                                ></Avatar>
                                <div className="avatar-info">
                                    <Title level={5}>{item.name}</Title>
                                    <p>{item.email || ''}</p>
                                </div>
                            </Avatar.Group>{" "}
                        </>
                    ),
                    key: item.id,
                    description: item.description,
                }
            }) : []


        case 'Regiones':
            return data.length ? data.map(item => {
                return {
                    name: (
                        <>
                            <Avatar.Group>
                                <Avatar
                                    className="shape-avatar"
                                    shape="square"
                                    size={40}
                                    src={item.profilePicture ?? <Avatar.Icon icon="user" />}
                                ></Avatar>
                                <div className="avatar-info">
                                    <Title level={5}>{item.name}</Title>
                                    <p>{item.email || ''}</p>
                                </div>
                            </Avatar.Group>{" "}
                        </>
                    ),
                    key: item.id,
                    description: item.description,
                }
            }) : []
        default:

    }

}
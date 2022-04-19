import { DashboardOutlined, FlagOutlined, GlobalOutlined, IdcardOutlined, MessageOutlined, TagsOutlined, UsergroupAddOutlined } from "@ant-design/icons"

export const MenuLinks = [
    {
        key: 'inicio',
        name: "Inicio",
        url: "/dashboard",
        icon: <DashboardOutlined />,
    }, {
        key: 'interlocutores',
        name: "Interlocutores",
        url: "/interlocutores",
        icon: <UsergroupAddOutlined />,
    },
    {
        key: 'sabedorxs',
        name: 'Saberedorxs',
        url: '/sabedorxs',
        icon: <IdcardOutlined />,
    },
    {
        key: 'cuerpos',
        name: 'Cuerpos',
        url: '/cuerpos',
        icon: <FlagOutlined />,
    },
    {
        key: 'regiones',
        name: 'Regiones',
        url: '/regiones',
        icon: <GlobalOutlined />
    },
    {
        key: 'resonancias',
        name: 'Resonancias',
        url: '/resonancias',
        icon: <TagsOutlined />
    },{
        key:'conversaciones',
        name:'Conversaciones',
        url:'/conversaciones',
        icon:<MessageOutlined />
    }
]

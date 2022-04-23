import { CarOutlined, DashboardOutlined, FlagOutlined, GlobalOutlined, IdcardOutlined, LockOutlined, MessageOutlined, RocketOutlined, SafetyCertificateOutlined, TagsOutlined, TeamOutlined, UsergroupAddOutlined } from "@ant-design/icons"

export const MenuLinks = [
    {
        key: 'inicio',
        name: "Dashboard",
        url: "/Dashboard",
        icon: <DashboardOutlined />,
    },
    {
        key: 'conductores',
        name: "Conductores",
        url: "/Conductores",
        icon: <CarOutlined />,
    },
    {
        key: 'pasajeros',
        name: "Pasajeros",
        url: "/Pasajeros",
        icon: <TeamOutlined />,
    }, {
        key: 'marcas',
        name: "Marcas de vehiculos",
        url: "/Marcas",
        icon: <TagsOutlined />,
    },
    {
        key: 'aseguradoras',
        name: "Aseguradoras",
        url: "/Aseguradoras",
        icon: <LockOutlined />,
    },
    {
        key: 'roles',
        name: "Roles",
        url: "/Roles",
        icon: <SafetyCertificateOutlined />,
    }, {
        key: 'cuentas',
        name: 'Cuentas Admin',
        url: "/Cuentas",
        icon: <IdcardOutlined />,
    }
    // }, {
    //     key: 'interlocutores',
    //     name: "Interlocutores",
    //     url: "/interlocutores",
    //     icon: <UsergroupAddOutlined />,
    // },
    // {
    //     key: 'sabedorxs',
    //     name: 'Saberedorxs',
    //     url: '/sabedorxs',
    //     icon: <IdcardOutlined />,
    // },
    // {
    //     key: 'cuerpos',
    //     name: 'Cuerpos',
    //     url: '/cuerpos',
    //     icon: <FlagOutlined />,
    // },
    // {
    //     key: 'regiones',
    //     name: 'Regiones',
    //     url: '/regiones',
    //     icon: <GlobalOutlined />
    // },
    // {
    //     key: 'resonancias',
    //     name: 'Resonancias',
    //     url: '/resonancias',
    //     icon: <TagsOutlined />
    // },{
    //     key:'conversaciones',
    //     name:'Conversaciones',
    //     url:'/conversaciones',
    //     icon:<MessageOutlined />
    // }
]

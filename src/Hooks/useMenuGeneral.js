import { MenuLinks } from "../Utilities/MenusLink"
import {Menu} from 'antd'
import { NavLink, useLocation } from "react-router-dom"
export const useMenuGeneral = () => {
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");
    return(
        MenuLinks.map(item => {
            return(<Menu.Item key={item.key}>
                <NavLink to={item.url}>
                  <span
                    className="icon"
                    style={{
                      background: page === item.name ? '#258FFB' : "",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span className="label">
                    {item.name}
                  </span>
                </NavLink>
                </Menu.Item>)
        })
    )
}
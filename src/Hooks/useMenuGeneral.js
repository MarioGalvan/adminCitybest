import { MenuLinks } from "../Utilities/MenusLink";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
export const useMenuGeneral = () => {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");
  const [pagerender, setpagerender] = useState("");
  useEffect(() => {
    if (page === "huella_carbono") {
      setpagerender("Huella de carbono");
    } else {
      setpagerender(page);
    }
    console.log(page);
  }, [page]);
  return MenuLinks.map((item) => {
    return (
      <Menu.Item key={item.key}>
        <NavLink to={item.url}>
          <span
            className="icon"
            style={{
              background:
                pagerender === item.name ||
                (item.name === "Cuentas Admin" && pagerender === "Cuentas") || (item.name === "Roles" && pagerender === "Roles/Nuevo_Rol")
                  ? "#441a7b"
                  : "",
              color:
                pagerender === item.name ||
                (item.name === "Cuentas Admin" && pagerender === "Cuentas") || (item.name === "Roles" && pagerender === "Roles/Nuevo_Rol")
                  ? "#fff"
                  : "",
              opacity:
                pagerender === item.name ||
                (item.name === "Cuentas Admin" && pagerender === "Cuentas") || (item.name === "Roles" && pagerender === "Roles/Nuevo_Rol")
                  ? 0.8
                  : 1,
            }}
          >
            {item.icon}
          </span>
          <span className="label">{item.name}</span>
        </NavLink>
      </Menu.Item>
    );
  });
};

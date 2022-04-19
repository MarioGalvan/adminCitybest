
import { Menu} from "antd";
import logo from "../../assets/images/logo.png";
import { useMenuGeneral } from "../../Hooks/useMenuGeneral";

function Sidenav() {

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span>AcontraCorriente</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        {useMenuGeneral()}
      </Menu>
    </>
  );
}

export default Sidenav;

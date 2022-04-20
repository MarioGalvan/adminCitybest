
import { Menu, Row} from "antd";
import logo from "../../assets/images/logocitybest.png";
import { useMenuGeneral } from "../../Hooks/useMenuGeneral";

function Sidenav() {

  return (
    <>
      <Row className="brand" justify="center">
        <img  src={logo} alt="" />
      </Row>
      <hr />
      <Menu  mode="inline">
        {useMenuGeneral()}
      </Menu>
    </>
  );
}

export default Sidenav;

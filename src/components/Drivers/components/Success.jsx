import { Modal, Button, Space } from "antd";

function success() {
  Modal.success({
    content: "Conductor aprobado exitosamente!",
  });
}

export default () => (
  <Space wrap>
    <Button onClick={success}>Success</Button>
  </Space>
);

import {
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";

import axios from "axios";

const { confirm } = Modal;

export const editRol = (
  editName,
  currentName,
  id,
  data,
  history,
  setViewRol,
  setEditP
) => {
  confirm({
    title: "Editar Rol",
    icon: <QuestionCircleOutlined />,
    content: `¿Desea modificar el rol "${currentName}" por "${editName}" con sus nuevos permisos?`,
    okText: "Si",
    cancelText: "No",

    onOk() {
      axios
        .get(`${process.env.REACT_APP_BACKEND}/admin-roles`)
        .then((response) => {
          let rolExists =
            response.data.find((rol) => rol.name === editName) === undefined ||
            editName === currentName
              ? false
              : true;
          if (!rolExists) {
            axios
              .put(`${process.env.REACT_APP_BACKEND}/admin-roles/${id}`, data)
              .then((response) => {
                successRol("editado", currentName);
                setViewRol(false);
                setEditP(false);
              })
              .catch((error) => console.log(error));
          } else {
            warningRol(
              "Rol existente",
              "El rol tipeado ya existe. Por favor elija otro nombre."
            );
          }
        })
        .catch((error) => console.log(error));
    },

    onCancel() {},
  });
};

export const successRol = (type, name) => {
  Modal.success({
    content: `El rol ${name} ha sido ${type} correctamente!`,
  });
};

export const error = () => {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages...",
  });
};

export const warningRol = (title, content) => {
  Modal.warning({
    title,
    content,
  });
};

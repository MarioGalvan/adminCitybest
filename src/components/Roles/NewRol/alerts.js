import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import Swal from "sweetalert2";
import axios from "axios";

const { confirm } = Modal;

export const saveRol = (name, data, history) => {
  confirm({
    title: "Nuevo Rol",
    icon: <ExclamationCircleOutlined />,
    content: `¿Desea agregar el rol "${name}"?`,
    okText: "Si",
    cancelText: "No",

    onOk() {
      return axios
        .post(`${process.env.REACT_APP_BACKEND}/admin-roles`, data)
        .then((response) => {
          console.log(response.data);
          successRol(name);
          history.push('/Roles')
        })
        .catch((error) => console.log(error));
    },

    onCancel() {},
  });
};

export const alertMessage = (title, text, icon) =>
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton: icon === "question" ? true : false,
    showConfirmButton: true,
    confirmButtonColor: "#441a7b",
    cancelButtonColor: "#441a7b",
    confirmButtonText: icon === "question" ? "Si" : "Ok",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      if (title === "Nuevo Rol")
        Swal.fire(
          "Agregado!",
          "El rol ha sido agregado exitosamente!",
          "success"
        );
    }
  });

export const successRol = (name) => {
  Modal.success({
    content: `El rol ${name} ha sido registrado correctamente!`,
  });
};

export const error = () => {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages...",
  });
};

export const warning = () => {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages...",
  });
};

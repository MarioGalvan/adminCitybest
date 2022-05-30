import {
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import Swal from "sweetalert2";
import axios from "axios";

const { confirm } = Modal;

export const saveRol = (name, data, history) => {
  confirm({
    title: "Nuevo Rol",
    icon: <QuestionCircleOutlined />,
    content: `¿Desea agregar el rol "${name}"?`,
    okText: "Si",
    cancelText: "No",

    onOk() {
      let superAdminExists = false;
      let rol;

      if (data.isSuperAdmin) {
        axios
          .get(`${process.env.REACT_APP_BACKEND}/admin-roles`)
          .then((response) => {
            rol = response.data.find(
              (rolItem) => rolItem.isSuperAdmin === true
            );
            if (rol) {
              superAdminExists = true;
              warningRol("SuperAdmin", "Ya existe un SuperAdmin registrado.");
            } else {
              axios
                .post(`${process.env.REACT_APP_BACKEND}/admin-roles`, data)
                .then((response) => {
                  successRol("registrado", name);
                  history.push("/Roles");
                })
                .catch((error) => {
                  console.log(error);
                  history.push("/Roles");
                });
            }
          })
          .catch((error) => console.log(error));
      } else {
        axios
          .get(`${process.env.REACT_APP_BACKEND}/admin-roles`)
          .then((response) => {
            rol = response.data.find((rolItem) => rolItem.name === name);
            if (rol) {
              warningRol(
                "Rol existente.",
                "Ya existe un rol registrado con ese nombre."
              );
            } else {
              axios
                .post(`${process.env.REACT_APP_BACKEND}/admin-roles`, data)
                .then((response) => {
                  successRol("registrado", name);
                  history.push("/Roles");
                })
                .catch((error) => {
                  console.log(error);
                  history.push("/Roles");
                });
            }
          })
          .catch((error) => console.log(error));
      }
    },

    onCancel() {},
  });
};

export const deleteRol = (id, name, setViewRol, setEditP) => {
  confirm({
    title: "Eliminar Rol",
    icon: <QuestionCircleOutlined />,
    content: `¿Desea eliminar el rol "${name}"?`,
    okText: "Si",
    cancelText: "No",

    onOk() {
      return axios
        .delete(`${process.env.REACT_APP_BACKEND}/admin-roles/${id}`)
        .then((response) => {
          successRol("eliminado", name);
          setViewRol(false);
          setEditP(false);
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

import axios from "axios";
import { Modal } from "antd";

export const confirmDocs = async (
  id,
  option,
  setModalText,
  setConfirmLoading,
  setvisible,
  handleCancel,
  refresh,
  setRefresh
) => {
  setModalText("Un momento por favor...");
  setConfirmLoading(true);
  await axios
    .post(`${process.env.REACT_APP_BACKEND}/drivers/approve`, {
      driverId: id,
      serviceType: option,
    })
    .then((response) => {
      setConfirmLoading(false);
      setModalText("Selecciona la categoría para el conductor");
      success(setvisible, handleCancel, setRefresh, refresh);
    })
    .catch((err) => {
      setConfirmLoading(false);
      setModalText("Selecciona la categoría para el conductor");
      error(setvisible, handleCancel, setRefresh);
    });
};

const success = (setvisible, handleCancel, setRefresh, refresh) => {
  Modal.success({
    content: "Conductor aprobado exitosamente!",
    onOk: () => {
      handleCancel();
      setvisible(false);
      setRefresh(refresh + 1);
    },
  });
};

const error = (setvisible, handleCancel, setRefresh, refresh) => {
  Modal.error({
    content: "No se pudo aprobar al conductor. Intentelo nuevamente por favor!",
    onOk: () => {
      handleCancel();
      setvisible(false);
      setRefresh(refresh + 1);
    },
  });
};

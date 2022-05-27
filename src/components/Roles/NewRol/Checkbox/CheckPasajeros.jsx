import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "Ver pasajeros",
  "Editar pasajeros",
  "Bloquear pasajeros",
  "Eliminar pasajeros",
  "Exportar pasajeros",
];
const defaultCheckedList = [""];

const PermissionsPasajeros = ({ setPassengers }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);

    let data = [...list];

    if (data.indexOf("Ver pasajeros") !== -1)
      data[data.indexOf("Ver pasajeros")] = "LIST_PASSENGERS";
    if (data.indexOf("Editar pasajeros") !== -1)
      data[data.indexOf("Editar pasajeros")] = "EDIT_PASSENGERS";
    if (data.indexOf("Bloquear pasajeros") !== -1)
      data[data.indexOf("Bloquear pasajeros")] = "BLOCK_PASSENGERS";
    if (data.indexOf("Eliminar pasajeros") !== -1)
      data[data.indexOf("Eliminar pasajeros")] = "DELETE_PASSENGERS";
    if (data.indexOf("Exportar pasajeros") !== -1)
      data[data.indexOf("Exportar pasajeros")] = "EXPORT_PASSENGERS";

    setPassengers(data);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    if (checkAll)
      setPassengers([
        "LIST_PASSENGERS",
        "EDIT_PASSENGERS",
        "BLOCK_PASSENGERS",
        "DELETE_PASSENGERS",
        "EXPORT_PASSENGERS",
      ]);
    else setPassengers([""]);
  }, [checkAll]);

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Marcar todos
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
        className={styles.checkboxGroup}
      />
    </>
  );
};

export default PermissionsPasajeros;

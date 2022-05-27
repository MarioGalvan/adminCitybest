import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "Ver conductores",
  "Editar conductores",
  "Aprobar/rechazar documentos",
  "Bloquear conductores",
  "Eliminar conductores",
  "Exportar conductores",
];
const defaultCheckedList = [""];

const Drivers = ({ setDrivers }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);

    let data = [...list];

    if (data.indexOf("Ver conductores") !== -1)
      data[data.indexOf("Ver conductores")] = "LIST_DRIVERS";
    if (data.indexOf("Editar conductores") !== -1)
      data[data.indexOf("Editar conductores")] = "EDIT_DRIVERS";
    if (data.indexOf("Aprobar/rechazar documentos") !== -1)
      data[data.indexOf("Aprobar/rechazar documentos")] =
        "CHECK_DRIVER_DOCUMENTS";
    if (data.indexOf("Bloquear conductores") !== -1)
      data[data.indexOf("Bloquear conductores")] = "BLOCK_DRIVERS";
    if (data.indexOf("Eliminar conductores") !== -1)
      data[data.indexOf("Eliminar conductores")] = "DELETE_DRIVERS";
    if (data.indexOf("Exportar conductores") !== -1)
      data[data.indexOf("Exportar conductores")] = "EXPORT_DRIVERS";

    setDrivers(data);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    if (checkAll)
      setDrivers([
        "LIST_DRIVERS",
        "EDIT_DRIVERS",
        "CHECK_DRIVER_DOCUMENTS",
        "BLOCK_DRIVERS",
        "DELETE_DRIVERS",
        "EXPORT_DRIVERS",
      ]);
    else setDrivers([""]);
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

export default Drivers;

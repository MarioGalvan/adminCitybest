import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import { currentDrivers } from "../helpers/currentPermissions";
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

const CheckConductores = ({ permissions, setEditDrivers }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    setEditDrivers(list);
  };

  useEffect(() => {
    setCheckedList(currentDrivers(permissions));
  }, []);

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

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

export default CheckConductores;

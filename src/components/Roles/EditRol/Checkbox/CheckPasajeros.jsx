import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import { currentPassengers } from "../helpers/currentPermissions";
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

const CheckPasajeros = ({ permissions, setEditPassengers }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    setEditPassengers(list);
  };

  useEffect(() => {
    setCheckedList(currentPassengers(permissions));
  }, []);

  // useEffect(() => {
  //   console.log(checkedList, 'checked');
  // }, [checkedList])

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

export default CheckPasajeros;

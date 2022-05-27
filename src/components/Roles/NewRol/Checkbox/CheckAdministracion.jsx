import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "Ver cuentas administradoras",
  "Editar cuentas administradoras",
  "Crear cuentas administradoras",
  "Eliminar cuentas administradoras",
  "Ver roles administrativos",
  "Editar roles administrativos",
  "Crear roles administrativos",
  "Eliminar roles administrativos",
];
const defaultCheckedList = ["Ver pasajeros"];

const Administracion = ({ setAdministration }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);

    let data = [...list];

    if (data.indexOf("Ver cuentas administradoras") !== -1)
      data[data.indexOf("Ver cuentas administradoras")] = "LIST_ADMINS";
    if (data.indexOf("Editar cuentas administradoras") !== -1)
      data[data.indexOf("Editar cuentas administradoras")] = "EDIT_ADMINS";
    if (data.indexOf("Crear cuentas administradoras") !== -1)
      data[data.indexOf("Crear cuentas administradoras")] = "CREATE_ADMINS";
    if (data.indexOf("Eliminar cuentas administradoras") !== -1)
      data[data.indexOf("Eliminar cuentas administradoras")] = "DELETE_ADMINS";
    if (data.indexOf("Ver roles administrativos") !== -1)
      data[data.indexOf("Ver roles administrativos")] = "LIST_ADMIN_ROLES";
    if (data.indexOf("Editar roles administrativos") !== -1)
      data[data.indexOf("Editar roles administrativos")] = "EDIT_ADMIN_ROLES";
    if (data.indexOf("Crear roles administrativos") !== -1)
      data[data.indexOf("Crear roles administrativos")] = "CREATE_ADMIN_ROLES";
    if (data.indexOf("Eliminar roles administrativos") !== -1)
      data[data.indexOf("Eliminar roles administrativos")] =
        "DELETE_ADMIN_ROLES";

    setAdministration(data);
  };

  // useEffect(() => {
  //   console.log(checkedList);
  // }, [checkedList]);

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    if (checkAll)
      setAdministration([
        "LIST_ADMINS",
        "EDIT_ADMINS",
        "CREATE_ADMINS",
        "DELETE_ADMINS",
        "LIST_ADMIN_ROLES",
        "EDIT_ADMIN_ROLES",
        "CREATE_ADMIN_ROLES",
        "DELETE_ADMIN_ROLES",
      ]);
    else setAdministration([""]);
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

export default Administracion;

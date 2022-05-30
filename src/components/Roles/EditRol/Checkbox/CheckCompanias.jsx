import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import { currentCompanies } from "../helpers/currentPermissions";
import styles from "./styles.module.css";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "Ver compañías aseguradoras",
  "Editar compañías aseguradoras",
  "Crear compañías aseguradoras",
  "Eliminar compañías aseguradoras",
];
const defaultCheckedList = [""];

const CheckCompanias = ({permissions, setEditCompanies}) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    setEditCompanies(list);
  };

  useEffect(() => {
    setCheckedList(currentCompanies(permissions));
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

export default CheckCompanias;

import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import { currentBrands } from "../helpers/currentPermissions";
import styles from "./styles.module.css";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "Ver marca de vehículos",
  "Editar marca de vehículos",
  "Crear marca de vehículos",
  "Eliminar marca de vehículos",
];
const defaultCheckedList = [""];

const CheckBrands = ({permissions, setEditBrands}) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    setEditBrands(list);
  };
  
  useEffect(() => {
    setCheckedList(currentBrands(permissions));
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

export default CheckBrands;

import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "Ver marca de vehículos",
  "Editar marca de vehículos",
  "Crear marca de vehículos",
  "Eliminar marca de vehículos",
];
const defaultCheckedList = [""];

const Marcas = ({ setBrands }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);

    let data = [...list];

    if (data.indexOf("Ver marca de vehículos") !== -1)
      data[data.indexOf("Ver marca de vehículos")] = "LIST_CAR_BRAND";
    if (data.indexOf("Editar marca de vehículos") !== -1)
      data[data.indexOf("Editar marca de vehículos")] = "EDIT_CAR_BRAND";
    if (data.indexOf("Crear marca de vehículos") !== -1)
      data[data.indexOf("Crear marca de vehículos")] = "CREATE_CAR_BRAND";
    if (data.indexOf("Eliminar marca de vehículos") !== -1)
      data[data.indexOf("Eliminar marca de vehículos")] = "DELETE_CAR_BRAND";

    setBrands(data);
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
      setBrands([
        "LIST_CAR_BRAND",
        "EDIT_CAR_BRAND",
        "CREATE_CAR_BRAND",
        "DELETE_CAR_BRAND",
      ]);
    else setBrands([""]);
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

export default Marcas;

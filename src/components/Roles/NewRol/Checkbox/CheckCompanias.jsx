import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "Ver compañías aseguradoras",
  "Editar compañías aseguradoras",
  "Crear compañías aseguradoras",
  "Eliminar compañías aseguradoras",
];
const defaultCheckedList = [""];

const Companias = ({ setCompanies }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);

    let data = [...list];

    if (data.indexOf("Ver compañías aseguradoras") !== -1)
      data[data.indexOf("Ver compañías aseguradoras")] =
        "LIST_COMPANY_INSURANCE";
    if (data.indexOf("Editar compañías aseguradoras") !== -1)
      data[data.indexOf("Editar compañías aseguradoras")] =
        "EDIT_COMPANY_INSURANCE";
    if (data.indexOf("Crear compañías aseguradoras") !== -1)
      data[data.indexOf("Crear compañías aseguradoras")] =
        "CREATE_COMPANY_INSURANCE";
    if (data.indexOf("Eliminar compañías aseguradoras") !== -1)
      data[data.indexOf("Eliminar compañías aseguradoras")] =
        "DELETE_COMPANY_INSURANCE";

    setCompanies(data);
  };

  useEffect(() => {
    if (checkAll)
      setCompanies([
        "LIST_COMPANY_INSURANCE",
        "EDIT_COMPANY_INSURANCE",
        "CREATE_COMPANY_INSURANCE",
        "DELETE_COMPANY_INSURANCE",
      ]);
    else setCompanies([""]);
  }, [checkAll]);

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

export default Companias;

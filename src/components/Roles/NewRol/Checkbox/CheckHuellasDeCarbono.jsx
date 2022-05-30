import { Checkbox, Divider } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Ver estadísticas"];
const defaultCheckedList = [""];

const HuellasDeCarbono = ({ setCarbonFootPrints }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);

    let data = [...list];

    if (data.indexOf("Ver estadísticas") !== -1)
      data[data.indexOf("Ver estadísticas")] = "SEE_STATS_CARBONFOOTPRINTS";

      setCarbonFootPrints(data);
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
    if (checkAll) setCarbonFootPrints(["SEE_STATS_CARBONFOOTPRINTS"]);
    else setCarbonFootPrints([""]);
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

export default HuellasDeCarbono;

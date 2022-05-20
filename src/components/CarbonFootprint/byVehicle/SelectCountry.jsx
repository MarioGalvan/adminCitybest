import React from "react";
import { Select, Typography, Space } from "antd";
import { useDispatch } from "react-redux";
import { setCountryByVehicle } from "../../../globalState/actions";
import styles from "./styles.module.css";

const SelectCountry = () => {
  const { Option } = Select;
  const { Title } = Typography;
  const dispatch = useDispatch();

  function handleChange(value) {
    console.log(`selected ${value}`);
    dispatch(setCountryByVehicle(value));
  }
  return (
    <div style={{marginLeft: '1rem'}}>
      <Space direction="horizontal" >
        <Title
          level={5}
          style={{
            marginTop: "6px",
            marginRight: "0.2rem",
          }}
        >
          País:
        </Title>
        <Select
          defaultValue="Todos"
          style={{ width: 120 }}
          className={styles.selectP}
          onChange={handleChange}
        >
          <Option value="Todos">Todos</Option>
          <Option value="Argentina">Argentina</Option>
          <Option value="Chile">Chile</Option>
          <Option value="Colombia">Colombia</Option>
          <Option value="Mexico">Mexico</Option>
          <Option value="Peru">Peru</Option>
          <Option value="Uruguay">Uruguay</Option>
        </Select>
      </Space>
    </div>
  );
};

export default SelectCountry;


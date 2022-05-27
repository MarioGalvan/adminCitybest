import React, { useEffect } from "react";
import { Select, Typography, Space } from "antd";
import { useDispatch } from "react-redux";
import { setPeriod } from "../../globalState/carbonFootPrintActions";
import styles from "./styles.module.css";

const SelectPeriod = () => {
  const { Option } = Select;
  const { Title } = Typography;
  const dispatch = useDispatch();

  function handleChange(value) {
    console.log(`selected ${value}`);
    dispatch(setPeriod(value));
  }
  return (
    <div>
      <Space direction="horizontal">
        <Title
          level={5}
          style={{
            marginTop: "6px",
            marginRight: "0.2rem",
          }}
        >
          Período:
        </Title>
        <Select
          defaultValue="mensual"
          style={{ width: 120, textAlign: 'center' }}
          className={styles.selectP}
          onChange={handleChange}
        >
          <Option value="diario">Diario</Option>
          <Option value="mensual">Mensual</Option>
          <Option value="trimestral">Trimestral</Option>
          <Option value="anual">Anual</Option>
        </Select>
      </Space>
    </div>
  );
};

export default SelectPeriod;


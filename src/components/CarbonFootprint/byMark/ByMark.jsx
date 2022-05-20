import React from "react";
import marks from "./data";
import Autocomplete from "../Autocomplete";
import { Space, Typography } from "antd";
import Pagination from "../pagination/PaginationComponent";
import SelectCountry from "./SelectCountry";
import styles from "../styles.module.css";

const ByMark = ({ currentPageByMark, setCurrentPageByMark }) => {
  const { Title } = Typography;

  let currentComponentMark = marks.find(
    (mark) => mark.id === currentPageByMark
  )?.component;

  return (
    <div className={styles.byMarkContainer} style={{ marginTop: "5px" }}>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Space>
          <Title
            level={5}
            style={{
              margin: "0px",
              marginRight: "5px",
            }}
          >
            Buscador:
          </Title>
          <Autocomplete setCurrentPageByMark={setCurrentPageByMark} byMark />
        </Space>
        <SelectCountry />
      </div>
      {currentComponentMark}
      <div
        style={{
          margin: "0px auto",
          width: "fit-content",
          marginTop: "1rem",
        }}
      >
        <Pagination
          currentPageByMark={currentPageByMark}
          setCurrentPageByMark={setCurrentPageByMark}
          byMark
        />
      </div>
    </div>
  );
};

export default ByMark;

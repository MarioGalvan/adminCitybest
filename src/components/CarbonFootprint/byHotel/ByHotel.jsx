import React from "react";
import hotels from "./data";
import Autocomplete from "../Autocomplete";
import { Space, Typography } from "antd";
import Pagination from "../pagination/PaginationComponent";
import styles from '../styles.module.css';

const ByHotel = ({ currentPageByHotel, setCurrentPageByHotel }) => {
  const { Title } = Typography;

  let currentComponentHotel = hotels.find(
    (hotel) => hotel.id === currentPageByHotel
  )?.component;

  return (
    <div className={styles.byHotelContainer} style={{ marginTop: "5px" }}>
      <Space direction={"horizontal"} style={{ alignItems: "center" }}>
        <Title
          level={5}
          style={{
            margin: "0px",
            marginRight: "5px",
          }}
        >
          Buscador:
        </Title>
        <Autocomplete className={styles.searchHotel} setCurrentPageByHotel={setCurrentPageByHotel} byHotel />
      </Space>

      {currentComponentHotel}
      <div
        style={{
          margin: "0px auto",
          width: "fit-content",
          marginTop: "1rem",
        }}
      >
        <Pagination
          currentPageByHotel={currentPageByHotel}
          setCurrentPageByHotel={setCurrentPageByHotel}
          byHotel
        />
      </div>
    </div>
  );
};

export default ByHotel;

import React, { useState } from "react";
import { Tabs, Typography } from "antd";
import { BarChartOutlined, DoubleRightOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { COLORPRIMARY } from "../../Hooks/constants";
import AllCountries from "./allCountries/AllCountries";
import ByCountriesOne from "./byCountries/ByCountriesOne";
import ByVehicle from "./byVehicle/ByVehicle";
import ByMarkOne from "./byMark/ByMarkOne";
import Pagination from "./pagination/PaginationComponent";
import SelectPeriod from "./SelectPeriod";

const { TabPane } = Tabs;
const { Title } = Typography;

const CarbonFootprint = () => {
  const [currentPageByCountry, setCurrentPageByCountry] = useState(1);
  const [currentPageByVehicle, setCurrentPageByVehicle] = useState(1);

  return (
    <div className={styles.containerCarboonFootprint}>
      <Title className={styles.title} level={4} style={{ color: COLORPRIMARY }}>
        <BarChartOutlined style={{ fontSize: "30px", marginRight: "5px" }} />{" "}
        Seleccione un criterio para observar las estadísticas del ahorro de la
        huella de carbono.
      </Title>
      <div
        className={styles.selectPeriod}
        style={{
          textAlign: "right",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <SelectPeriod />
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <DoubleRightOutlined />
              Total Países
            </span>
          }
          key="1"
        >
          <AllCountries />
        </TabPane>
        <TabPane
          tab={
            <span>
              <DoubleRightOutlined />
              Por País
            </span>
          }
          key="2"
        >
          {currentPageByCountry === 1 ? (
            <ByCountriesOne country="Argentina" color="lightblue" />
          ) : currentPageByCountry === 2 ? (
            <ByCountriesOne country="Chile" color="rgba(255, 0, 0, 0.5)" />
          ) : currentPageByCountry === 3 ? (
            <ByCountriesOne country="Colombia" color="rgba(255, 255, 128, 1)" />
          ) : currentPageByCountry === 4 ? (
            <ByCountriesOne country="Mexico" color="rgba(0, 255, 64, 0.5)" />
          ) : currentPageByCountry === 5 ? (
            <ByCountriesOne country="Peru" color="lightgray" />
          ) : currentPageByCountry === 6 ? (
            <ByCountriesOne country="Uruguay" color="lightblue" />
          ) 
          : null}
          <div className={styles.pagination}>
            <Pagination
              setCurrentPageByCountry={setCurrentPageByCountry}
              byCountry
            />
          </div>
        </TabPane>
        <TabPane
          tab={
            <span>
              <DoubleRightOutlined />
              Por tipo de vehículo
            </span>
          }
          key="3"
        >
          {currentPageByVehicle === 1 ? (
            <ByVehicle vehicle="Gas" color="rgba(0, 255, 128, 0.7)" />
          ) : currentPageByVehicle === 2 ? (
            <ByVehicle vehicle="Híbrido" color="rgba(0, 255, 255, 0.7)" />
          ) : null}
          <div className={styles.pagination}>
            <Pagination
              setCurrentPageByVehicle={setCurrentPageByVehicle}
              byVehicle
            />
          </div>
        </TabPane>
        <TabPane
          tab={
            <span>
              <DoubleRightOutlined />
              Por marca de vehículo
            </span>
          }
          key="4"
        >
          <div
            style={{
              width: "40%",
              margin: "0px auto",
              backgroundColor: "rgba(235, 235, 235, 1)",
              borderRadius: "5px",
            }}
          >
            {/* <ByMarkOne /> */}
          </div>
          <div
            style={{
              margin: "0px auto",
              width: "fit-content",
              marginTop: "1rem",
            }}
          >
            <Pagination />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CarbonFootprint;

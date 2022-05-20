import React, { useState } from "react";
import { Tabs, Typography, Button } from "antd";
import { BarChartOutlined, DoubleRightOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { COLORPRIMARY } from "../../Hooks/constants";
import AllCountries from "./allCountries/AllCountries";
import ByCountriesOne from "./byCountries/ByCountriesOne";
import ByVehicle from "./byVehicle/ByVehicle";
import ByMark from "./byMark/ByMark";
import ByHotel from "./byHotel/ByHotel";
import Pagination from "./pagination/PaginationComponent";
import SelectPeriod from "./SelectPeriod";
import ModalResumeByCountries from "./byCountries/ModalResume";
import ModalResumeByVehicle from "./byVehicle/ModalResume";
import ModalResumeByMark from "./byMark/ModalResume";
import ModalResumeByHotel from "./byHotel/ModalResume";
import SelectCountry from "./byVehicle/SelectCountry";
import Equivalencies from "./Equivalencies/Equivalencies";
import Swal from "sweetalert2";

const { TabPane } = Tabs;
const { Title } = Typography;

const CarbonFootprint = () => {
  const [currentPageByCountry, setCurrentPageByCountry] = useState(1);
  const [currentPageByVehicle, setCurrentPageByVehicle] = useState(1);
  const [currentPageByMark, setCurrentPageByMark] = useState(1);
  const [currentPageByHotel, setCurrentPageByHotel] = useState(1);

  const showEquivalencies = () => {
    Swal.fire({
      title:
        "Cuadro informativo sobre equivalencias de Toneladas en KM recorridos",
      text: "Modal with a custom image.",
      imageWidth: 400,
      imageHeight: 200,
    });
  };

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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Equivalencies />
        <SelectPeriod />
      </div>
      <Tabs defaultActiveKey="1" style={{marginTop: '0.8rem'}}>
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
          ) : null}
          <div className={styles.pagination}>
            <Pagination
              currentPageByCountry={currentPageByCountry}
              setCurrentPageByCountry={setCurrentPageByCountry}
              byCountry
            />
          </div>
          <ModalResumeByCountries />
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
          <SelectCountry />
          {currentPageByVehicle === 1 ? (
            <ByVehicle vehicle="Eléctrico" color="rgba(0, 255, 128, 0.7)" />
          ) : currentPageByVehicle === 2 ? (
            <ByVehicle vehicle="Híbrido" color="rgba(0, 255, 255, 0.7)" />
          ) : currentPageByVehicle === 3 ? (
            <ByVehicle vehicle="Gas" color="rgba(140, 150, 20, 0.7)" />
          ) : null}
          <div className={styles.pagination}>
            <Pagination
              currentPageByVehicle={currentPageByVehicle}
              setCurrentPageByVehicle={setCurrentPageByVehicle}
              byVehicle
            />
          </div>
          <ModalResumeByVehicle />
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
          <ByMark
            currentPageByMark={currentPageByMark}
            setCurrentPageByMark={setCurrentPageByMark}
          />
          <ModalResumeByMark />
        </TabPane>
        <TabPane
          tab={
            <span>
              <DoubleRightOutlined />
              Por hoteles
            </span>
          }
          key="5"
        >
          <ByHotel
            currentPageByHotel={currentPageByHotel}
            setCurrentPageByHotel={setCurrentPageByHotel}
          />
          <ModalResumeByHotel />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CarbonFootprint;


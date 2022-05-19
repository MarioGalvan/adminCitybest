import React from "react";
import { Row, Col } from "antd";
import { CarouselComponent } from "./components/CarouselComponent.jsx";
import { CardComponent } from "./components/CardComponent.jsx";

export const DriverCarInfo = ({ driverInformation = [], setvisible, setRefresh }) => {
  console.log(driverInformation, "driverInformation");
  const { _id, documentsApproved, carInfo, carDocuments } = driverInformation;

  return (
    <>
      <div>
        <Row justify="center">
          <Col
            xs={{ span: 15, offset: 0 }}
            sm={{ span: 14, offset: 2 }}
            md={{ span: 8, offset: 0 }}
            lg={{ span: 8, offset: 1 }}
            xl={{ span: 8, offset: 1 }}
          >
            <CardComponent {...carInfo} documentsApproved={documentsApproved} id={_id} setvisible={setvisible} setRefresh={setRefresh}/>
          </Col>

          <Col
            xs={{ span: 17, offset: 2 }}
            sm={{ span: 16, offset: 2 }}
            md={{ span: 8, offset: 3 }}
            lg={{ span: 8, offset: 1 }}
            xl={{ span: 8, offset: 1 }}
          >
            <CarouselComponent {...carDocuments}/>
          </Col>
        </Row>
      </div>
    </>
  );
};

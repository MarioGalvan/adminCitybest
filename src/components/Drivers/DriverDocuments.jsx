import React from "react";
import { FileProtectOutlined } from "@ant-design/icons";
import { Card, Col, Image, Row } from "antd";
import { useState } from "react";
import { COLORPRIMARY } from "../../Hooks/constants";

export const DriverDocuments = ({ driverInformation = [] }) => {
  const [dataRender, setdataRender] = useState([]);
  React.useEffect(() => {
    setdataRender([
      {
        title: "Foto de perfil",
        url: driverInformation?.profilePictureUrl ?? "",
      },
      {
        title: "Licencia (frente)",
        url: driverInformation?.documents?.licenseFrontUrl ?? "",
      },
      {
        title: "Licencia (dorso)",
        url: driverInformation?.documents?.licenseBackUrl ?? "",
      },
      {
        title: "DNI (Frente)",
        url: driverInformation?.documents?.dniFrontUrl ?? "",
      },
      {
        title: "DNI (Dorso)",
        url: driverInformation?.documents?.dniBackUrl ?? "",
      },
      {
        title: "Certificado de antecendentes judiciales",
        url: driverInformation?.documents?.judicialRecordsUrl ?? "",
      },
    ]);
  }, [driverInformation]);
  return (
    <Row
      gutter={16}
      justify="center"
      style={{
        scrollbarColor: COLORPRIMARY,
        scrollbarWidth: "thin",
        scrollbarBaseColor: COLORPRIMARY,
      }}
    >
      {dataRender.map(({ title, url }, index) => {
        return (
          <Col key={index} className="gutter-row" span={8}>
            <Card
              bordered
              hoverable
              key={index}
              style={{
                // border:`2px solid ${COLORPRIMARY}`,
                borderRadius: 12,
                margin: 10,
              }}
              title={title}
            >
              {url ? (
                <Image src={url} />
              ) : (
                <FileProtectOutlined
                  style={{
                    fontSize: 50,
                    color: COLORPRIMARY,
                  }}
                />
              )}
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

import { Row, Col, Card, Table, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useColumnsBySection } from "../../Hooks/useColumnsBySection";
import { useDataBySection } from "../../Hooks/useDataBySection";
import { useState } from "react";
import { ModalCrud } from "../ModalCrud/ModalCrud";
import { useEffect } from "react";
import { UseApiService } from "../../Services/useApiServices";
import { ModalPreviewPassenger } from "../ModalPreview/ModalPreviewPassenger";
import { UseExportExcel } from "../../Hooks/useExportExcel";
import { COLORPRIMARY } from "../../Hooks/constants";
import { ModalPreviewDriver } from "../ModalPreview/ModalPreviewDriver";

function TableCrud({ sectionName = "", title = "" }) {
  const [ showModal, setshowModal ] = useState({
    type: "",
    section: "",
    visible: false,
  });
  const [ data, setdata ] = useState([]);
  const [ loading, setloading ] = useState(false);
  const [ previewModal, setpreviewModal ] = useState({
    visible: false,
    data: {},
  })


  useEffect(() => {
    UseApiService('get', {}, `/${sectionName}`).then((res) => {
     //console.log("🚀 ~ file: TableCrud.jsx ~ line 28 ~ UseApiService ~ res", res)
      setdata(res.data);
      setloading(false);
    })
  }, [ showModal.visible, sectionName ]);

  const handlePreview = (item) => {
    setpreviewModal({
      visible: true,
      data: item.preview
    });
  }

  return (
    <>
      <div className="tabled">
        <Row gutter={[ 24, 0 ]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title={<span style={{ color: COLORPRIMARY }}>
                {`Listado de ${title}`}
              </span>}
              extra={
                <Button
                  icon={<DownloadOutlined />} style={{
                    background: COLORPRIMARY,
                    color: "#fff",
                    border: "none",
                    fontSize: "13px",
                  }} onClick={() => {
                    UseExportExcel(data, sectionName)
                  }}>
                  Exportar
                </Button>
              }

            >
              <div className="table-responsive">
                <Table
                  columns={useColumnsBySection(sectionName, handlePreview)}
                  dataSource={useDataBySection(sectionName, data)}
                  pagination={true}
                  className="ant-border-space"
                  loading={loading}
                />
              </div>
            </Card>

            {sectionName === "passengers" ? (<ModalPreviewPassenger
              previewModal={previewModal}
              setvisible={setpreviewModal} />) : sectionName === "drivers" && (<ModalPreviewDriver
                previewModal={previewModal}
                setvisible={setpreviewModal} />)}



          </Col>
        </Row>
      </div>
    </>
  );
}

export default TableCrud;

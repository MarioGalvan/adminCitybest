import { Row, Col, Card, Table, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useColumnsBySection } from "../../Hooks/useColumnsBySection";
import { useDataBySection } from "../../Hooks/useDataBySection";
import { useState } from "react";
import { ModalCrud } from "../ModalCrud/ModalCrud";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";

function TableCrud({ sectionName = "" }) {
  const [showModal, setshowModal] = useState({
    type: "",
    section: "",
    visible: false,
  });
  const [data, setdata] = useState([]);
  let db = getFirestore();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    async function GetData() {
      let datatemp = [];
      const querySnapshot = await getDocs(collection(db, sectionName));
      querySnapshot.forEach((doc) => {
        datatemp.push(doc.data());
      });
      setdata(datatemp);
    }
    if (!showModal.visible) {
      GetData();
      setloading(false);
    }
  }, [db, showModal.visible, sectionName]);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title={`Listado de ${sectionName}`}
              extra={
                <>
                  <Button
                    onClick={() => {
                      setshowModal({
                        type: "create",
                        section: sectionName,
                        visible: true,
                      });
                    }}
                    type="primary"
                    icon={<PlusCircleOutlined />}
                  >
                    {sectionName !== "Cuerpos"
                      ? ` Agregar ${sectionName.slice(0, -2)}`
                      : 'Agregar '}
                  </Button>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={useColumnsBySection(sectionName)}
                  dataSource={useDataBySection(sectionName, data)}
                  pagination={true}
                  className="ant-border-space"
                  loading={loading}
                />
              </div>
            </Card>

            <ModalCrud
              showModal={showModal}
              setshowModal={setshowModal}
              sectionName={sectionName}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TableCrud;

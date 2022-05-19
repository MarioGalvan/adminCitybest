import { Tabs } from "antd";
import { CarOutlined, TeamOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default () => (
  <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <TeamOutlined />
          Tab 1
        </span>
      }
      key="1"
    >
      General
    </TabPane>
    <TabPane
      tab={
        <span>
          <CarOutlined />
          Tab 2
        </span>
      }
      key="2"
    >
      Conductores
    </TabPane>
    <TabPane
      tab={
        <span>
          <TeamOutlined />
          Tab 1
        </span>
      }
      key="3"
    >
      Pasajeros
    </TabPane>
  </Tabs>
);

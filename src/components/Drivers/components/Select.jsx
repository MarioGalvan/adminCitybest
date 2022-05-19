import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => (
  <>
    <Select
      defaultValue="Economic Gas"
      style={{ width: "50%", marginLeft: "25%" }}
      onChange={handleChange}
    >
      <Option value="gas">Economic Gas</Option>
      <Option value="elec">Ecológico Eléctrico</Option>
      <Option value="taxiEco">Taxi ecológico</Option>
    </Select>
  </>
);

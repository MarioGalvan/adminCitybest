import React, { useState } from "react";
import { Pagination } from "antd";

const PaginationComponent = ({
  byCountry,
  byVehicle,
  setCurrentPageByCountry,
  setCurrentPageByVehicle,
}) => {
  const [state, setState] = useState({ current: 1 });

  const onChange = (page) => {
    if (byCountry) setCurrentPageByCountry(page);
    if (byVehicle) setCurrentPageByVehicle(page);
    setState({ current: page });
  };

  return (
    <Pagination
      current={state.current}
      onChange={onChange}
      total={byCountry ? 60 : byVehicle ? 20 : 0}
    />
  );
};

export default PaginationComponent;

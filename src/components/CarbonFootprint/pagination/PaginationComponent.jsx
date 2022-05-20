import React, { useState } from "react";
import { Pagination } from "antd";

const PaginationComponent = ({
  byCountry,
  byVehicle,
  byMark,
  byHotel,
  setCurrentPageByCountry,
  setCurrentPageByVehicle,
  setCurrentPageByMark,
  setCurrentPageByHotel,
  currentPageByMark,
  currentPageByHotel,
}) => {
  const [state, setState] = useState({ current: 1 });

  const onChange = (page) => {
    if (byCountry) setCurrentPageByCountry(page);
    if (byVehicle) setCurrentPageByVehicle(page);
    if (byMark) setCurrentPageByMark(page);
    if (byHotel) setCurrentPageByHotel(page);
    setState({ current: page });
  };

  return (
    <Pagination
      current={byMark ? currentPageByMark : currentPageByHotel}
      onChange={onChange}
      showQuickJumper
      locale={{ jump_to: "Ir a página", page: "" }}
      showSizeChanger={false}
      total={byCountry ? 60 : byVehicle ? 30 : byMark ? 250 : byHotel ? 40 : 10}
    />
  );
};

export default PaginationComponent;

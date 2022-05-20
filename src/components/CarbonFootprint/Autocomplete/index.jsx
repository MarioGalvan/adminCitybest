import { AutoComplete } from "antd";
import marks from "../byMark/data";
import hotels from "../byHotel/data";

const Complete = ({
  byMark,
  byHotel,
  setCurrentPageByMark,
  setCurrentPageByHotel,
}) => {
  const options = byMark
    ? marks.map((mark) => {
        return { value: mark.name };
      })
    : byHotel
    ? hotels.map((hotel) => {
        return { value: hotel.name };
      })
    : null;

  const onSelect = (itemSelected) => {
    let id = byMark
      ? marks.find((mark) => mark.name === itemSelected).id
      : byHotel
      ? hotels.find((hotel) => hotel.name === itemSelected).id
      : null;

    console.log(itemSelected, 'itemSelected');
    console.log(byMark, "byMark");
    console.log(byHotel, "byHotel");

    if (byMark) return setCurrentPageByMark(id);
    if (byHotel) return setCurrentPageByHotel(id);
  };

  return (
    <AutoComplete
      onSelect={onSelect}
      style={{
        width: 200,
      }}
      options={options}
      placeholder="Escriba la marca a buscar..."
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

export default Complete;

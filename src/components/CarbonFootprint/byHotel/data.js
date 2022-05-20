import ByHotelOne from "./ByHotelOne";

const hotels = [
  {
    id: 1,
    name: "Novotel Las Condes",
    color: "red",
    component: <ByHotelOne name={"Novotel Las Condes"} color={"pink"} />,
  },
  {
    id: 2,
    name: "Novotel Providencia",
    color: "pink",
    component: <ByHotelOne name={"Novotel Providencia"} color={"orange"} />,
  },
  {
    id: 3,
    name: "Novotel Vitacura",
    color: "orange",
    component: <ByHotelOne name={"Novotel Vitacura"} color={"lightblue"} />,
  },
  {
    id: 4,
    name: "Mercure Concepción",
    color: "lightblue",
    component: <ByHotelOne name={"Mercure Concepción"} color={"rgba(200, 191, 231, 1)"} />,
  },
];

// Ordeno el arreglo por orden alfabetico
hotels.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

// Reemplazo los id's anteriores segun nuevo arreglo ordenado alfabeticamente
let i = 1;

export default hotels.map((hotel) => {
  return { ...hotel, id: i++ };
});

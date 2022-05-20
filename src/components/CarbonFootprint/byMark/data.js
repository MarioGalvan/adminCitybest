import ByMarkOne from "./ByMarkOne";

const marks = [
  {
    id: 1,
    name: "ByD",
    color: "red",
    component: <ByMarkOne name={"ByD"} color={"orange"} />,
  },
  {
    id: 2,
    name: "Renault",
    color: "pink",
    component: <ByMarkOne name={"Renault"} color={"pink"} />,
  },
  {
    id: 3,
    name: "Mitsubishi",
    color: "orange",
    component: <ByMarkOne name={"Mitsubishi"} color={"lightblue"} />,
  },
  {
    id: 4,
    name: "BMW",
    color: "lightblue",
    component: <ByMarkOne name={"BMW"} color={"rgba(200, 191, 231, 1)"} />,
  },
  {
    id: 5,
    name: "Volvo",
    color: "red",
    component: <ByMarkOne name={"Volvo"} color={"orange"} />,
  },
  {
    id: 6,
    name: "Hyundai",
    color: "pink",
    component: <ByMarkOne name={"Hyundai"} color={"pink"} />,
  },
  {
    id: 7,
    name: "Nissan",
    color: "orange",
    component: <ByMarkOne name={"Nissan"} color={"lightblue"} />,
  },
  {
    id: 8,
    name: "Mercedez Benz",
    color: "lightblue",
    component: <ByMarkOne name={"Mercedez Benz"} color={"rgba(200, 191, 231, 1)"} />,
  },
  {
    id: 9,
    name: "Citecar",
    color: "red",
    component: <ByMarkOne name={"Citecar"} color={"orange"} />,
  },
  {
    id: 10,
    name: "Citroen",
    color: "pink",
    component: <ByMarkOne name={"Citroen"} color={"pink"} />,
  },
  {
    id: 11,
    name: "Peugeot",
    color: "orange",
    component: <ByMarkOne name={"Peugeot"} color={"lightblue"} />,
  },
  {
    id: 12,
    name: "Smart",
    color: "lightblue",
    component: <ByMarkOne name={"Smart"} color={"rgba(200, 191, 231, 1)"} />,
  },
  {
    id: 13,
    name: "Eagle",
    color: "red",
    component: <ByMarkOne name={"Eagle"} color={"orange"} />,
  },
  {
    id: 14,
    name: "Maxus",
    color: "pink",
    component: <ByMarkOne name={"Maxus"} color={"pink"} />,
  },
  {
    id: 15,
    name: "DFLM",
    color: "orange",
    component: <ByMarkOne name={"DFLM"} color={"lightblue"} />,
  },
  {
    id: 16,
    name: "MG",
    color: "lightblue",
    component: <ByMarkOne name={"MG"} color={"rgba(200, 191, 231, 1)"} />,
  },
  {
    id: 17,
    name: "Kia",
    color: "red",
    component: <ByMarkOne name={"Kia"} color={"orange"} />,
  },
  {
    id: 18,
    name: "Jac",
    color: "pink",
    component: <ByMarkOne name={"Jac"} color={"pink"} />,
  },
  {
    id: 19,
    name: "Chevrolet",
    color: "orange",
    component: <ByMarkOne name={"Chevrolet"} color={"lightblue"} />,
  },
  {
    id: 20,
    name: "Mini",
    color: "lightblue",
    component: <ByMarkOne name={"Mini"} color={"rgba(200, 191, 231, 1)"} />,
  },
  {
    id: 21,
    name: "Audi",
    color: "red",
    component: <ByMarkOne name={"Audi"} color={"orange"} />,
  },
  {
    id: 22,
    name: "DFSK",
    color: "pink",
    component: <ByMarkOne name={"DFSK"} color={"pink"} />,
  },
  {
    id: 23,
    name: "Maple",
    color: "orange",
    component: <ByMarkOne name={"Maple"} color={"lightblue"} />,
  },
  {
    id: 24,
    name: "ZNA",
    color: "lightblue",
    component: <ByMarkOne name={"ZNA"} color={"rgba(200, 191, 231, 1)"} />,
  },
  {
    id: 25,
    name: "JMC",
    color: "red",
    component: <ByMarkOne name={"JMC"} color={"orange"} />,
  },
];

// Ordeno el arreglo por orden alfabetico
marks.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

// Reemplazo los id's anteriores segun nuevo arreglo ordenado alfabeticamente
let i = 1;

export default marks.map((mark) => {
  return { ...mark, id: i++ };
});

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      //   display: true,
      //   text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      title: { display: true, text: "Período" },
    },
    y: {
      title: { display: true, text: "Toneladas (t)" },
      type: "linear",
      // display: true,
      position: "left",
    },
    // y1: {
    //   type: "linear",
    //   display: true,
    //   position: "right",
    //   grid: {
    //     drawOnChartArea: false,
    //   },
    // },
  },
};

const labels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Argentina",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "lightblue",
    },
    {
      label: "Chile",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "pink",
    },
    {
      label: "Colombia",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "orange",
    },
    {
      label: "Peru",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "yellow",
    },
    {
      label: "Mexico",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "lightgray",
    },
  ],
};

const ByCountries = () => {
  return <Bar width={35} height={15} options={options} data={data} />;
};

export default ByCountries;

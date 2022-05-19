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
import styles from "../styles.module.css";

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
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      // display: true,
      // text: "Chart.js Line Chart - Multi Axis",
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

const ByCountriesOne = ({ country, color }) => {
  const data = {
    labels,
    datasets: [
      {
        label: country,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: color,
        // borderWidth: 5,
        backgroundColor: color,
        yAxisID: "y",
      },
      // {
      //   label: "Chile",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   yAxisID: "y1",
      // },
      // {
      //   label: "Mexico",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   yAxisID: "y2",
      // },
      // {
      //   label: "Peru",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   yAxisID: "y3",
      // },
      // {
      //   label: "Colombia",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   yAxisID: "y4",
      // },
    ],
  };

  return (
    <Bar
      width={35}
      height={12}
      options={options}
      data={data}
      className={country !== "Argentina" ? styles.barByCountries : null}
    />
  );
};

export default ByCountriesOne;

import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

const AllCountries = () => {
  let { period } = useSelector((state) => state["carbonFootPrint"]);
  let labels = [];

  let arreglo = [];

  for (let i = 1; i < 366; i++) {
    arreglo.push(i);
  }

  labels =
    period === "diario"
      ? arreglo
      : period === "mensual"
      ? [
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
        ]
      : period === "trimestral"
      ? ["Enero", "Marzo", "Junio", '"Septiembre', "Diciembre"]
      : period === "anual"
      ? [new Date().getFullYear() - 1, new Date().getFullYear()]
      : null;

  let data = {
    labels,
    datasets: [
      {
        label: "Total Países",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "lightblue",
        borderWidth: 5,
        backgroundColor: "lightblue",
        yAxisID: "y",
      },
    ],
  };

  return <Line width={35} height={12} options={options} data={data} />;
};

export default AllCountries;

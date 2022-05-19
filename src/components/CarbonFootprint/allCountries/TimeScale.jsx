// import React, { useEffect } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import data from "./data";
// import { COLORPRIMARY } from "../../../Hooks/constants";

// const TimeScale = () => {
//   // setup block
//   const data = {
//     labels: [
//       "Enero",
//       "Febrero",
//       "Marzo",
//       "Abril",
//       "Mayo",
//       "Junio",
//       "Julio",
//       "Agosto",
//       "Septiembre",
//       "Octubre",
//       "Noviembre",
//       "Diciembre",
//     ],
//     datasets: [
//       {
//         label: "Total países",
//         data: [20, 18, 12, 24, 7, 3, 2, 1, 1, 1, 1], // aca va el acumulado de loa países por cada mes (posicion "0" Enero, "1" Febrero y asi...)
//         backgroundColor: [
//           COLORPRIMARY,
//           //   "rgba(255, 99, 132, 0.2)",
//           //   "rgba(54, 162, 235, 0.2)",
//           //   "rgba(255, 206, 86, 0.2)",
//           //   "rgba(75, 192, 192, 0.2)",
//           //   "rgba(153, 102, 255, 0.2)",
//           //   "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           //   "rgba(255, 99, 132, 1)",
//           //   "rgba(54, 162, 235, 1)",
//           //   "rgba(255, 206, 86, 1)",
//           //   "rgba(75, 192, 192, 1)",
//           //   "rgba(153, 102, 255, 1)",
//           //   "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const footer = (tooltipItems) => {
//     let sum = 0;

//     tooltipItems.forEach(function (tooltipItem) {
//       sum += tooltipItem.parsed.y;
//     });
//     return "Sum: " + sum;
//   };

//   const getOrCreateTooltip = (chart) => {
//     let tooltipEl = chart.canvas.parentNode.querySelector('div');
  
//     if (!tooltipEl) {
//       tooltipEl = document.createElement('div');
//       tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
//       tooltipEl.style.borderRadius = '3px';
//       tooltipEl.style.color = 'white';
//       tooltipEl.style.opacity = 1;
//       tooltipEl.style.pointerEvents = 'none';
//       tooltipEl.style.position = 'absolute';
//       tooltipEl.style.transform = 'translate(-50%, 0)';
//       tooltipEl.style.transition = 'all .1s ease';
  
//       const table = document.createElement('table');
//       table.style.margin = '0px';
  
//       tooltipEl.appendChild(table);
//       chart.canvas.parentNode.appendChild(tooltipEl);
//     }
  
//     return tooltipEl;
//   };
  
//   const externalTooltipHandler = (context) => {
//     // Tooltip Element
//     const {chart, tooltip} = context;
//     const tooltipEl = getOrCreateTooltip(chart);
  
//     // Hide if no tooltip
//     if (tooltip.opacity === 0) {
//       tooltipEl.style.opacity = 0;
//       return;
//     }
  
//     // Set Text
//     if (tooltip.body) {
//       const titleLines = tooltip.title || [];
//       const bodyLines = tooltip.body.map(b => b.lines);
  
//       const tableHead = document.createElement('thead');
  
//       titleLines.forEach(title => {
//         const tr = document.createElement('tr');
//         tr.style.borderWidth = 0;
  
//         const th = document.createElement('th');
//         th.style.borderWidth = 0;
//         const text = document.createTextNode(title);
  
//         th.appendChild(text);
//         tr.appendChild(th);
//         tableHead.appendChild(tr);
//       });
  
//       const tableBody = document.createElement('tbody');
//       bodyLines.forEach((body, i) => {
//         const colors = tooltip.labelColors[i];
  
//         const span = document.createElement('span');
//         span.style.background = colors.backgroundColor;
//         span.style.borderColor = colors.borderColor;
//         span.style.borderWidth = '2px';
//         span.style.marginRight = '10px';
//         span.style.height = '10px';
//         span.style.width = '10px';
//         span.style.display = 'inline-block';
  
//         const tr = document.createElement('tr');
//         tr.style.backgroundColor = 'inherit';
//         tr.style.borderWidth = 0;
  
//         const td = document.createElement('td');
//         td.style.borderWidth = 0;
  
//         const text = document.createTextNode(body);
  
//         td.appendChild(span);
//         td.appendChild(text);
//         tr.appendChild(td);
//         tableBody.appendChild(tr);
//       });
  
//       const tableRoot = tooltipEl.querySelector('table');
  
//       // Remove old children
//       while (tableRoot.firstChild) {
//         tableRoot.firstChild.remove();
//       }
  
//       // Add new children
//       tableRoot.appendChild(tableHead);
//       tableRoot.appendChild(tableBody);
//     }
  
//     const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
  
//     // Display, position, and set styles for font
//     tooltipEl.style.opacity = 1;
//     tooltipEl.style.left = positionX + tooltip.caretX + 'px';
//     tooltipEl.style.top = positionY + tooltip.caretY + 'px';
//     tooltipEl.style.font = tooltip.options.bodyFont.string;
//     tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
//   };

//   // config block
//   const config = {
//     type: "line",
//     data,
//     options: {
//       interaction: {
//         intersect: false,
//         mode: "index",
//       },
//       plugins: {
//         title: {
//           display: true,
//           text: 'Chart.js Line Chart - External Tooltips'
//         },
//         tooltip: {
//           enabled: false,
//           position: 'nearest',
//           external: externalTooltipHandler
//         }
//       },
//       scales: {
//         x: {
//           type: "category",
//           labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
//           title: { display: true, text: "Período" },
//           beginAtZero: true,
//         },
//         y: {
//           title: { display: true, text: "Toneladas (t)" },
//           //   type: "category",
//           //   labels: ["20 Tn", "18 Tn", "16 Tn", "14 Tn", "12 Tn", "10 Tn", "8 Tn", "6 Tn", "4 Tn", "2 Tn", "0 Tn"],
//           beginAtZero: true,
//         },
//       },
//     },
//   };

//   useEffect(() => {
//     // render / init block
//     const myChart = new Chart(
//       document.getElementById("myChart").getContext("2d"),
//       config
//     );
//   }, []);

//   return (
//     <div>
//       <canvas id="myChart" width="400" height="400"></canvas>
//     </div>
//   );
// };

// export default TimeScale;



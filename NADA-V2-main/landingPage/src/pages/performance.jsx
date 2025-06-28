// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';

// const PerformanceChart = ({ swimmer }) => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/performance/${swimmer}`)
//       .then(response => response.json())
//       .then(data => {
//         const labels = data.dates;
//         const datasets = Object.keys(data.performance_data).map(key => ({
//           label: key,
//           data: data.performance_data[key],
//           borderColor: getRandomColor(),
//           fill: false,
//         }));

//         setChartData({ labels, datasets });
//       });
//   }, [swimmer]);

//   const getRandomColor = () => {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   };

//   if (!chartData) {
//     return <div>Loading...</div>;
//   }

//   // return <Line data={chartData} />;
// };

// export default PerformanceChart;

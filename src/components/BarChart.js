import React, {useRef, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar , getDatasetAtEvent , getElementAtEvent} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({chartData,getNewData}) {
    
    const chartRef = useRef();

    const onClick = (event) => {
        let [clickedElement] = getElementAtEvent(chartRef.current, event);
        const payload = chartData.labelsBar[clickedElement.datasetIndex]
        console.log(`==> : payload`, payload);
        getNewData(payload);
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Publication in years',
          },
        },
      };
      

  return <Bar options={options} data={{labels:chartData.labelsBar,datasets:chartData.datasets}} ref={chartRef} onClick={onClick} />;
}

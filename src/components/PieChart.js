import React, {useState, useRef} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart({chartData,getNewData}) {

    const chartRef = useRef();
      
        const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Top 10 Authors',
            },
          },
        };

  return <Pie options={options} data={chartData} ref={chartRef}  />;
}

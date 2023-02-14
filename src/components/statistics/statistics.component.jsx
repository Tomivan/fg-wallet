import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
import './statistics.component.css';


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
      title: {
        display: true,
        text: 'Statistics',
      },
    },
  };
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept'];

export const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#000000',
      },
    ],
  };
  
const Statistics = () => {
    return(
        <div className="statistics">
            <Bar options={options} data={data} className='canvas'/>
        </div>
    )
}

export default Statistics;
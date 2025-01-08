import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as chartjs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales} from 'chart.js';

chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement, 
    Title,
    Tooltip, 
    Legend
);


function GraficoMain(){

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets:[
            {
                label: '# of votes',
                data: [12,19,3,5,2,3],
                borderWidth: 1,
                backgroundColor:"#628185"
            },
        ],
    };

    const opciones = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }

    return(

        <div className="sm:w-auto xl:w-[900px] h-[460px] mt-6 sm:ml-6 border-2 border-[#628185] rounded-xl">
            <Bar data={data} opciones={opciones} />
      </div>
    )
};

export default GraficoMain;
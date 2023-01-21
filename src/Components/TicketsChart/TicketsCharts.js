import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Typography } from '@mui/material';



Chart.register(CategoryScale, LinearScale, BarElement)
const data = {
    labels: ['Tanner Hodge', 'Lynda Shames', 'Luke Bruke', 'Kai Gaines', 'Kenzie Fields', 'Sophie Mortimer', 'Lenny Coy', 'Kyla Park', 'Sarah Matthews', 'James Morduck'],
    datasets: [{
        indexAxis: 'y',
        data: [117, 65, 59, 56, 54, 51, 40, 32, 29, 23],
        fill: false,
        backgroundColor: [
            'rgb(0,128,0,0.8)',

        ],
        borderColor: [
            'rgb(0,128,0,0.8)	',

        ],

        borderWidth: 1,
        barThickness: 30,
        categoryPercentage: 1,

        options: {

        }
    }]
};
const config = {
    type: 'bar',
    data,
    options: {
        indexAxis: 'y',
        aspectRatio: 1.0,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                },

            },
            y: {
                grid: {
                    display: false
                },

            },


        }
    }
};
const TicketsCharts = () => {

    return (

        <div>
            <Typography sx={{ display: 'flex', justifyContent: 'center', }} variant='h5' color="#000000" gutterBottom>
                Ticktets Solved By Agent
            </Typography>
            <Bar {...config}></Bar>
        </div>

    );
};

export default TicketsCharts;
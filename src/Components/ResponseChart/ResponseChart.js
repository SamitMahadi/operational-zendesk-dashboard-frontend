import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, PointElement, LineElement } from 'chart.js';
import { Typography } from '@mui/material';


Chart.register(PointElement, LineElement)
const data = {
    labels: ['2018-11-17', '2018-11-16', '2018-11-15', '2018-11-14', '2018-11-13', '2018-11-12', '2018-11-11', '2018-11-10', '2018-11-09', '2018-11-08', '2018-11-07', '2018-11-06', '2018-11-05', '2018-11-04', '2018-11-03', '2018-11-02', '2018-11-01', '2018-10-31', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17',],
    datasets: [{
        label: 'My First Dataset',
        data: [2, 2.1, 2.2, 2.3, 2.4, 2.6, 2, 2, 2.1, 0, 1, 1.5, 1.7, 1.9, 2.3, 2.4, 2.6, 2, 2, 2.1, 2.2, 2.3, 2.4, 2.6, 2, 2, 2.1, 2.2, 2.3, 2.4, 2.6, 2, 2, 2.1, 2.2, 2.3, 2.4, 2.6, 2.2, 2.1, 2.2, 2.3, 2.4, 2.6, 2.2, 2.7, 3, 2.3, 2.4, 2.6, 2],

        borderColor: 'rgb(102, 51, 153)',
        backgroundColor: 'rgb(102, 51, 153)',
        fill: 1,


    }]
};
const config = {
    type: 'line',
    data,
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                },

            }
        }
    }
};

Chart.register(PointElement, LineElement)
const datas = {
    labels: ['2018-11-17', '2018-11-16', '2018-11-15', '2018-11-14', '2018-11-13', '2018-11-12', '2018-11-11', '2018-11-10', '2018-11-09', '2018-11-08', '2018-11-07', '2018-11-06', '2018-11-05', '2018-11-04', '2018-11-03', '2018-11-02', '2018-11-01', '2018-10-31', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17', '2018-11-17',],
    datasets: [{
        label: 'My First Dataset',
        data: [2, 2.1, 1.5, 1.7, 1.9, 2.2, 2.3, 2.4, 2.6, 2, 2, 2.3, 2.4, 2.6, 2, 2.1, 2.2, 2.1, 2.3, 2.4, 2.6, 2, 2, 2.1, 2.2, 2.3, 2.4, 2.6, 2, 2, 2.1, 2.2, 2.3, 2.4, 2.6, 2.2, 2.1, 2.2, 2.3, 2.4, 2.6, 2.2, 2.7, 3, 2.3, 2.4, 2.6, 2],
        borderColor: 'rgb(0,128,0,0.8)',
        backgroundColor: 'rgb(0,128,0,0.8)',

        fill: 1
    }]
};
const configs = {
    type: 'line',
    data,
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                },

            }
        }
    }
};
const ResponseChart = () => {
    return (
        <div>
            <Typography sx={{ display: 'flex', justifyContent: 'center', }} variant='h5' color="#000000" gutterBottom>
                First Response Time
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'center', }} variant='h5' color="rgb(102, 51, 153)" gutterBottom>
                1h 17min (Month 1h 38min)
            </Typography>
            <Line {...config} ></Line>
            <Typography sx={{ display: 'flex', justifyContent: 'center', }} variant='h5' color="#000000" gutterBottom>
                Full Resolution Time
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'center', }} variant='h5' color="rgb(0,128,0,0.8)" gutterBottom>
                1h 43min (Month 2h 25min)
            </Typography>
            <Line data={datas} datas={configs}></Line>
        </div>
    );
};

export default ResponseChart;
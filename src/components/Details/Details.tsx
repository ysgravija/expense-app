import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import useTransactions from '../../useTransactions';

import useStyles from './styles';

// let numArray : number [];
// const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//   ];

// const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };

Chart.register(ArcElement);

export interface DetailsProps {
    title : string
}

export const Details = (props : DetailsProps) => {
    const classes = useStyles();
    const {total, chartData } = useTransactions(props.title);
    
    return (
        <Card className={props.title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={props.title}/>
            <CardContent>
                <Typography variant="h5">RM{total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

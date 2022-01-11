import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'

import useStyles from './styles';
import { Category, Transaction } from '../../types/types';

Chart.register(ArcElement);

export interface DetailsProps {
    title : 'Income' | 'Expense',
    transactions : Transaction[]
    categories : Category[];
}

export const Details = ({title, transactions, categories} : DetailsProps) => {
    const classes = useStyles();
    const {chartData, total} = React.useMemo( () => {
        const categoryToAmount = (category : Category) => {
            return transactions.reduce((sum, transaction) => sum += transaction.category === category.name ? transaction.amount : 0, 0);       
        };
        
        const aggregatedCategories = categories.map(category => 
            ({ name: category.name, color : category.color, amount : categoryToAmount(category) })).filter(s => s.amount > 0);
        const total = aggregatedCategories.reduce((sum, item) => sum += item.amount, 0);
        const chartData = {
            datasets : [{
                data: aggregatedCategories.map(s => s.amount),
                backgroundColor: aggregatedCategories.map(s => s.color),
            }],
            labels: aggregatedCategories.map(s => s.name)
        };
        console.log( {chartData});
        return {chartData, total};
    }, [transactions, categories]);

    return (
        <Card className={title === 'Income'? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">RM{total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

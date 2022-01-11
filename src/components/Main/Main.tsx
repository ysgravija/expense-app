import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { Category, Transaction } from '../../types/types';

interface MainProps {
    transactions : Transaction[],
    categories : Category[],
    onTransactionDelete : (transaction : Transaction) => void;
    onTransactionCreate : (categoryName : string, type : 'Income' | 'Expense', amount : number, date : Date) => void;
}

const Main = ({transactions, categories, onTransactionDelete, onTransactionCreate } : MainProps) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance RM0</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* InfoCard */}
                    {/* Try saying: Add income for RM100 in Category Salary for Monday ... */}
                </Typography>
                <Divider/>
                <Form categories={categories} onTransactionCreate={onTransactionCreate} />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List transactions={transactions} onTransactionDelete={onTransactionDelete} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;

import React from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import formatDate from '../../../utils/formatDate'

import useStyles from './styles';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import { Transaction, TransactionAction } from '../../../context/contextReducer';

const initialState : Transaction = {
    id : '',
    category : '',
    amount : Number(''),
    type : 'Income',
    date : formatDate(new Date()),
};

const Form = () => {
    const classes = useStyles();
    const [fromData, setFormData] = React.useState<Transaction>(initialState);
    const { dispatch } = React.useContext(ExpenseTrackerContext);

    const createTransaction = () => {
        dispatch({
          type: TransactionAction.Add,
          payload: {
            id : uuidv4(),
            amount: Number(fromData.amount),
            category : String(fromData.category),
            type: String(fromData.type),
            date: formatDate(new Date(fromData.date))
          }
        });
      };

    const selectedCategories = fromData.type === 'Income' ? incomeCategories : expenseCategories;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={fromData.type} onChange={(e) => {
                        setFormData({...fromData, type : String(e.target.value), category : String('')})}
                    }>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={fromData.category} onChange={(e) => {
                        setFormData({...fromData, category : String(e.target.value)});
                    }}>
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={fromData.amount} onChange={(e) => {
                    setFormData({...fromData, amount : Number(e.target.value)}
                )}}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={fromData.date} onChange={(e) => {
                    setFormData({...fromData, date :  formatDate(new Date(e.target.value))}
                )}}/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth 
                onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form

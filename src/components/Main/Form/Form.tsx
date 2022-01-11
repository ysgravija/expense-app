import React from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

import useStyles from './styles';
import { Category, Transaction } from '../../../constants/categories';

const initialState : Transaction = {
    id : '', category : '', amount : Number(''), type : 'Income', date : new Date(),
};

interface FormProps {
    categories : Category[];
    onTransactionCreate : (categoryName : string, type : 'Income' | 'Expense', amount : number, date : Date) => void;
};

const Form = ({categories, onTransactionCreate} : FormProps) => {
    const classes = useStyles();
    const [formData, setFormData] = React.useState<Transaction>(initialState);
    
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
                    <Select value={formData.type} onChange={(e) => {
                        setFormData({...formData, type : e.target.value as 'Income' | 'Expense', category : String('')})}
                    }>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => {
                        setFormData({...formData, category : String(e.target.value)});
                    }}>
                        {categories.map((c) => <MenuItem key={c.name} value={c.name}>{c.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => {
                    setFormData({...formData, amount : Number(e.target.value)}
                )}}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => {
                    setFormData({...formData, date :  new Date(e.target.value)}
                )}}/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth 
                onClick={() => onTransactionCreate( formData.category, formData.type, formData.amount, formData.date )}>Create</Button>
        </Grid>
    )
}

export default Form;

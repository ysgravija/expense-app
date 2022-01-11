import React from 'react';
import { Grid } from '@material-ui/core';

import { Details } from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles';
import { expenseCategories, incomeCategories, Transaction } from './constants/categories';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const classes = useStyles();
    const [transactions, setTransactions] = React.useState<Transaction[]>([]); 
    const addTransactions = (categoryName : string, type : 'Income' | 'Expense', amount : number, date : Date) => {
        const currentTransactions : Transaction[] = [{category : categoryName, type, amount, date, id : uuidv4()}, ...transactions];
        setTransactions(currentTransactions);   
    };

    const deleteTransaction = (transaction : Transaction) => { 
        const currentTransactions : Transaction[] = transactions.filter((t)=> t.id !== transaction.id);
        setTransactions(currentTransactions);
    };
    
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{height: '100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income" transactions={transactions} categories={incomeCategories} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main transactions={transactions} onTransactionDelete={deleteTransaction} 
                    categories={[...incomeCategories, ...expenseCategories]} onTransactionCreate={addTransactions} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense" transactions={transactions} categories={expenseCategories} />
                </Grid>
            </Grid>
        </div>
    )
}

export default App;

import React from 'react';
import { Grid } from '@material-ui/core';

import { Details } from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles';
import { categories, Category, Transaction } from './types/types';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const classes = useStyles();
    const [transactions, setTransactions] = React.useState<Transaction[]>([]);
    const [balance, setBalance] = React.useState(0);
    
    const computeBalance = (transactions : Transaction[]) => {
        let total = 0;
        transactions.forEach((e) => (e.type === 'Income' ? total += e.amount : total -= e.amount));
        setBalance(total);
    };

    const addTransactions = (categoryName : string, type : 'Income' | 'Expense', amount : number, date : Date) => {
        console.log({categoryName});
        if (categoryName === "") {
            alert('Please select category.');
            return;
        }
        const currentTransactions : Transaction[] = [{category : categoryName, type, amount, date, id : uuidv4()}, ...transactions];
        computeBalance(currentTransactions);
        setTransactions(currentTransactions);
    };

    const deleteTransaction = (transaction : Transaction) => { 
        const currentTransactions : Transaction[] = transactions.filter((t)=> t.id !== transaction.id);
        computeBalance(currentTransactions);
        setTransactions(currentTransactions);
    };

    const incomeCategories : Category[] = categories.filter((c) => c.type === 'Income');
    const expenseCategories : Category[] = categories.filter((c) => c.type === 'Expense');
    
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{height: '100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income" transactions={transactions} categories={incomeCategories} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main balance={balance} transactions={transactions} onTransactionDelete={deleteTransaction} 
                    categories={[...categories]} onTransactionCreate={addTransactions} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense" transactions={transactions} categories={expenseCategories} />
                </Grid>
            </Grid>
        </div>
    )
}

export default App;

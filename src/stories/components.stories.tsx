import React from 'react';
import { storiesOf } from '@storybook/react';
import Details from '../components/Details/Details';
import { categories, Transaction } from '../types/types';
import List from '../components/Main/List/List';
import DeleteButton from '../components/Main/List/DeleteButton';
import Form from '../components/Main/Form/Form';
import { type } from 'os';

const incomeTransactions : Transaction[] = [ 
    {amount : 500, type : 'Income', category : 'Business', date : new Date(), id : "xyzabcd-112233"},
    {amount : 10000, type : 'Income', category : 'Salary', date : new Date(), id : "xyzabcd-112234"},
    {amount : 1500, type : 'Income', category : 'Investment', date : new Date(), id : "xyzabcd-112235"}, 
];

const expenseTransactions : Transaction[] = [ 
    {amount : 2500, type : 'Expense', category : 'Other', date : new Date(), id : "xyzabcd-112236"},
    {amount : 1500, type : 'Expense', category : 'Travel', date : new Date(), id : "xyzabcd-112237"},
    {amount : 230, type : 'Expense', category : 'Shopping', date : new Date(), id : "xyzabcd-112238"},
];

storiesOf('components', module)
.add(
    'Details', () => {
        return (
            <div>
                <Details title="Income" transactions={incomeTransactions} categories={categories} />
                <Details title="Expense" transactions={expenseTransactions} categories={categories} />
            </div>
        );
})
.add('List', () => {
    return (
        <div>
            <List transactions={incomeTransactions} 
                onTransactionDelete={(transaction) => alert('delete transaction with id=' + transaction.id)} />
        </div>
    );
})
.add('DeleteButton', () => {
    return (
        <div>
            <DeleteButton onClick={ () => alert('delete') }/>
        </div>
    );
})
.add('Form', () => {
    return (
        <div>
            <Form categories={categories} 
                onTransactionCreate={ (categoryName, type, amount, date) => alert('create' + JSON.stringify({categoryName, type, amount, date})) } />
        </div>
    )
})
;
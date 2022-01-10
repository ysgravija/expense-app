import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';
import { Transaction, TransactionAction } from '../../../context/contextReducer';

const List = () => {
    const classes = useStyles();
    const {state, dispatch} = React.useContext(ExpenseTrackerContext);
        // const deleteTransaction = (transaction : Transaction) => {
    //     dispatch( {type: TransactionAction.Delete, payload: transaction });
    // };
    
    const deleteTransaction = (transaction : Transaction) => {
        dispatch({
            type: TransactionAction.Delete,
            payload: { ...transaction }
        });
    }

    return (
        <MUIList dense={false} className={classes.list}>
            {state.transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`RM${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton aria-label='delete' edge='end' onClick={()=> deleteTransaction(transaction)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List;

import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { MoneyOff } from '@material-ui/icons';
import useStyles from './styles';
import { Transaction } from '../../../types/types';
import DeleteButton from './DeleteButton';

export interface ListProps {
    transactions : Transaction[];
    onTransactionDelete : (transaction : Transaction) => void;
};

const List = ({transactions, onTransactionDelete} : ListProps ) => {
    const classes = useStyles();
    
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`RM${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton aria-label='delete' edge='end'> 
                                <DeleteButton onClick={ ()=> onTransactionDelete(transaction) } />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List;

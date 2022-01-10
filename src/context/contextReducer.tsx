export enum TransactionAction {
    Add = 'ADD_TRANSACTION',
    Delete = 'DELETE_TRANSACTION'
}

export type Action = {
    type: TransactionAction,
    payload : Transaction
}

export interface Transaction {
    id : string;
    type : string;
    category : string;
    amount : number;
    date : string;
}


export type InitialStateType = {
    transactions : Transaction[]
}

export const contextReducer = (state : Transaction[], action : Action) => {
    let transactions;
    switch (action.type) {
        case TransactionAction.Delete:
            transactions = state.filter(t => t.id !== action.payload.id);
            return transactions;
        case TransactionAction.Add:
            transactions = [action.payload, ...state]
            return transactions;
        default:
            return state;
    }
}

export default contextReducer;
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// create the initial state

const initialState = {
    transactions: [
        { id: 1, description: 'Income 1', transactionAmount: 1000 },
        { id: 1, description: 'Expense 1', transactionAmount: -100 },
        { id: 1, description: 'Income 2', transactionAmount: 2000 },
        { id: 1, description: 'Expense 2', transactionAmount: -500 }
    ]
}

// create the global context

export const GlobalContext = createContext(initialState);

// create a provider for the global context

export const GlobalProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
        
    )
}
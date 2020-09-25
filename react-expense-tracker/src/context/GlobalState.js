import React, { createContext, useReducer } from 'react';
import AppReducer from '../reducers/AppReducer';
import { addTransaction, deleteTransaction } from '../actions';

const initialState = {
  transactions: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addDispatch(transaction) {
    addTransaction(transaction, dispatch);
  }

  function deleteDispatch(id) {
    deleteTransaction(id, dispatch);
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addDispatch,
        deleteDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

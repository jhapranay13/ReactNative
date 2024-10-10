import { createContext, useReducer } from "react";


export const ExpenseContext = createContext( {
    expneses: [],
    addExpenes: ({title, amount, date}) => {},
    setExpenses: (expenses) => {},
    deleteExpenes: ({id}) => {},
    updateExpenes: (id,{title, amount, date}) => {},
});

function expensesReducer(state, action) {
    switch(action.type) {
        case 'SET':
            return action.payload;
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [ {...action.payload, id: id},...state];
        case 'UPDATE':
            const index = state.findIndex(
                (expense) => { return expense.id === action.payload.id }
            );
            const updateStateExpense = state[index];
            const updateItem = {...updateStateExpense, ...action.payload.data}; 
            const updatedExpenseArr = [...state];
            updatedExpenseArr[index] = updateItem;
            return updatedExpenseArr;
        case 'DELETE':
            return state.filter((expense) => { return expense.id !== action.payload});
        default:
            return state;
    }
};


export const ExpenseContextProvider = ({children}) => {
    const [expenseState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    };

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    };

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: {id: id,  data: expenseData} })
    }

    function setExpense(expenseData) {
        dispatch({ type: 'SET', payload: expenseData})
    }
    const value = {
        expneses: expenseState,
        addExpenes: addExpense,
        setExpenses: setExpense,
        deleteExpenes: deleteExpense,
        updateExpenes: updateExpense,
    };
    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
};
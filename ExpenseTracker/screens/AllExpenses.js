import { StyleSheet, Text } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput';
import { useContext } from 'react';
import { ExpenseContext } from '../store/ExpensesContext';

export const AllExpenses = () => {
    const expContext = useContext(ExpenseContext);
    return (<ExpensesOutput expensePeriod="Total" expenses={expContext.expneses}></ExpensesOutput>);
};

const styles = StyleSheet.create();
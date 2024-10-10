import { StyleSheet, Text } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput';
import { getDateMinusDays } from '../util/date';
import { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from '../store/ExpensesContext';
import { getData } from '../util/datautil';
import { WaitingSpinner } from '../components/WaitingSpinner';

export const RecentExpense = () => {
    const expContext = useContext(ExpenseContext);
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        async function getExpenses() {
            const expenses = await getData();
            expContext.setExpenses(expenses);
            setIsFetching(false);
        }
        getExpenses();
    }, []);

    if (isFetching) {
        return <WaitingSpinner></WaitingSpinner>
    }

    const recent = expContext.expneses.filter((expense) => {
        const today = new Date();
        const day7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > day7DaysAgo;
    });

    return (<ExpensesOutput expensePeriod="Last 7 days" expenses={recent}></ExpensesOutput>);
};

const styles = StyleSheet.create();
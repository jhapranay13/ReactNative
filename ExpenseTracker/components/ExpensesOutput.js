import { StyleSheet, View } from "react-native";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";
import { GlobalStyles } from "../styles";



export const ExpensesOutput = ({expenses, expensePeriod}) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} expensePeriod={expensePeriod}/>
            <ExpensesList expenses={expenses}></ExpensesList>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingHorizontal: 24,
            paddingBottom: 24,
            backgroundColor: GlobalStyles.colors.primary700,
        },
    }
);
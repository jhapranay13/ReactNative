import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles";


export const ExpensesSummary = ({expensePeriod, expenses}) => {
    const expensesSum = expenses.reduce((initVal, expense) => { return initVal + expense.amount }, 0);
    return (
        <View style={styles.contianer}>
            <Text style={styles.period}>{expensePeriod}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contianer: {
        padding: 2,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,  
    }, 
    sum: {
        fontSize: 15,
        fontWeight: 'bold'
    },
});
import { FlatList, Text, View } from "react-native";
import { ExpeneItem } from "./ExpenseItem";

function renderExpenseItem(itemData) {
    return (
       <ExpeneItem id={itemData.item.id} 
            description={itemData.item.title} 
            amount={itemData.item.amount} 
            date={itemData.item.date}>

        </ExpeneItem>
    );
}

export const ExpensesList = ({expenses}) => {
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        >
        </FlatList>
            
    );
}
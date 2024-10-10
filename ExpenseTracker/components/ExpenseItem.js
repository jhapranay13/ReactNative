import { Pressable, StyleSheet, Text, TextBase, View } from "react-native";
import { GlobalStyles } from "../styles";
import { getFormattedDate } from "../util/date";
import { useNavigation } from "@react-navigation/native";

export const ExpeneItem = ({id, description, amount, date}) => {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('ManageScreen', {expenseId: id});
    }
    return(
        <Pressable onPress={pressHandler} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.expenseItems}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase} >{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount} >{amount}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create(
    {
        expenseItems: {
            padding: 12,
            marginVertical: 8,
            backgroundColor: GlobalStyles.colors.primary500,
            shadowRadius: 4,
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 3,
        },
        textBase: {
            color: GlobalStyles.colors.primary50
        },
        description: {
            fontSize: 16,
            marginBottom: 4,
            fontWeight: 'bold'
        },
        amountContainer: {
            paddingHorizontal: 12,
            paddingVertical: 4,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
        },
        amount: {
            color: GlobalStyles.colors.primary500,
            fontWeight: 'bold',
            minWidth: 80,
        },
        pressed: {
            opacity: 0.75,
        },
    }
);
import { StyleSheet, Text, View } from "react-native";

export const NumberContainer = ({children}) => {
    return (
        <View style={styles.contianer}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contianer: {
        borderWidth: 4,
        borderColor: '#ddb52f',
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',

    },
    numberText: {
        color:  '#ddb52f',
        fontSize: 36,
        fontWeight: 'bold'
    },
});
import { Platform, StyleSheet, Text } from "react-native";

export const Title = ({children}) => {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        //borderWidth: Platform.OS === 'andriod' ? 2 : 0,
        borderWidth: Platform.select({ios: 0, andriod: 2}),
        borderColor: '#ddb52f',
        padding: 12,
    },
});
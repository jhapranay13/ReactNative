import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../styles";

export const WaitingSpinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white"></ActivityIndicator>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: GlobalStyles.colors.primary700
        },
    }
);
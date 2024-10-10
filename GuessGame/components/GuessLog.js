import { StyleSheet, Text, View } from "react-native";

export const GuessLog = ({roundNumber, guessNumber}) => {
    return (
        <View style={styles.contianer}>
            <Text><Text style={styles.highlight}>ROUND NUMBER: </Text>
            {roundNumber} <Text style={styles.highlight}>GUESS NUMBER: </Text>{guessNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: '#ddb52f',
        textAlign: 'center',
        margin: 15,
        borderRadius: 15,
        padding: 8,
    },
    highlight: {
        fontSize: 14,
        fontWeight: 'bold',
    }
});
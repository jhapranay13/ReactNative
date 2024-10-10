import { Image, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title";

export const GameOver = ({onPress, guessNumber, rounds}) => {
    return (
    <View style={styles.container}>
        <Title>Game Over</Title>
        <Image style = {styles.gameOverStyles} source={require('../assets/success.jpg')}></Image>
        <PrimaryButton onPress={onPress}>Restart Game</PrimaryButton>
        <Text>Phone needed <Text style={styles.roundInfo}>{rounds}</Text> rounds to Guess 
            the number <Text style={styles.roundInfo}>{guessNumber}</Text></Text>
    </View>);
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        gameOverStyles: {
            height: '30%',
            width: '60%',
            borderRadius: 150,
            margin: 8
        },
        roundInfo: {
            color: '#3b021f',
            fontSize: 24,
        },
    }
);
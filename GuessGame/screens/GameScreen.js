import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Title } from "../components/Title";
import { useState, useEffect } from 'react';
import { NumberContainer } from "../components/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { GuessLog } from "../components/GuessLog";

let minBoundry = 1;
let maxBoundry = 100;
export const GameScreen = ({useNumber, onGameOver, setCurrentRound}) => {
    const initialGuess = generateRandomBetween(1, 100, useNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessLog, setGuessLog] = useState([]);

    const nextGuessHandler = (direction) => {

        if ((direction === 'lower' && currentGuess < useNumber) ||
            (direction === 'high' && currentGuess > useNumber) ) {
                Alert.alert("Don't Lie", "You know this is wrong", 
                    [{text: "Sorry", style: "cancel"}]);
                return;
        }
        let newRandNum = 0;
        setCurrentRound((prevState) => prevState + 1);
        if (direction === 'lower') {
            maxBoundry = currentGuess;
        } else {
            minBoundry = currentGuess + 1;
        }
        newRandNum = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRandNum);
        setGuessLog((prevState) => [newRandNum, ...prevState]);
    };

    useEffect( () => {
        if (currentGuess === useNumber) {
            onGameOver(true);
            minBoundry = 1;
            maxBoundry = 100;
        }
    },[currentGuess, useNumber, onGameOver]);
    // can use ionicons from expo/icons as plus and minus sign
    // useFonts hook to load custom fonts
    // <Apploading/ > is th splash screen 
    return (
        <SafeAreaView style= {styles.screen}>
            <Title>
                Game screen
            </Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.instructionText}>Hi Or Low</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'high')}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </View>
            <View>
                <FlatList 
                    data={guessLog}
                    renderItem= {(itemData) => <GuessLog roundNumber={guessLog.length} guessNumber={itemData.item}>{itemData.item}</GuessLog>}
                    keyExtractor={(item) => item}
                >

                </FlatList>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex : 1,
        padding: 28,
        margin: '5%',
    },
    instructionText: {
        color: '#ddb52f',
        fontSize: 24,
    }
});

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};
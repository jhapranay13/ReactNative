import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View, Text, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { Title } from '../components/Title';

export const StartGameScreen = ({onPickNumber}) => {
    const [numberinput, setNumberinput] = useState('');
    const {width, height} = useWindowDimensions();

   /* const textChangeHandler = (event) => {
        console.log(event.nativeEvent.target);
    };*/

    const textChangeHandler = (enterdText) => {
        setNumberinput(enterdText);
    };

    const resetInputHandler = () => {
        setNumberinput('');
    };

    const confirmInputHandler = ()=> {
        const inputNum = parseInt(numberinput);

        if (isNaN(inputNum) || inputNum <= 0 || inputNum > 99) {
            Alert.alert(
                "Invalid Number",
                "Number has to be between 1 and 99",
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(inputNum);
    };
    const marginTopDistance = height < 300 ? 30 : 100;

    return (
        <ScrollView>
            <KeyboardAvoidingView style= {{flex: 1}} behavior="position">
                <View style= {[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess A Number</Title>

                    <View style={styles.inputContainer}>
                        <Text style={styles.instructionText}>Enter a number</Text>
                        <TextInput 
                            style={styles.numberInput} 
                            maxLength={2} 
                            keyboardType="number-pad"
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={textChangeHandler}
                            value={numberinput}
                        >
                        </TextInput>
                        <View style={styles.primaryButtonContainer}>
                            <View style={styles.indvButtonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>RESET</PrimaryButton>
                            </View>
                            <View style={styles.indvButtonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>CONFIRM</PrimaryButton>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

//Dimensions.get('window').height
//Dimensions.get('window').width
// used to get height and width to change the style objects 
// But the problem is that it is not usefull to detect height and width
// when orientation chnages

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    instructionText: {
        color: '#ddb52f',
        fontSize: 24
    },
    inputContainer: {
        marginTop: 30,
        padding: 16,
        backgroundColor: '#3b021f',
        marginHorizontal: 24,
        borderRadius: 12,
        elevation: 7,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.4,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
    },
    primaryButtonContainer: {
        flexDirection:'row'
    },
    indvButtonContainer: {
        flex: 1,
    }
});
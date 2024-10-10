import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';


export const GoalsInput = (props) => {
    const [enterdGoal, setEnteredGoal] = useState('');


    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const onPressHandler = () => {
        props.onGoalsSet(enterdGoal);
        setEnteredGoal('');
      } 
    return (
        <Modal visible={props.isVisible} animationType='slide'>
            <View style = {styles.inputContainer}>
            <Image source={require('../assets/target.jpg')} style={styles.imageStyle}></Image>
                <TextInput placeholder='Your Course Goal' style = {styles.textInput} onChangeText={goalInputHandler} value={enterdGoal}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button title='Add Goal' onPress={onPressHandler} color='#b180f0'/>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title='Cancel' onPress={props.closeModal} color='#f31282'/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer : {
        flex: 1,
        height: 120,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        backgroundColor: '#311b6b',
        padding: 16,
    },
    textInput : {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        marginRight: 8,
        borderRadius: 6,
        padding: 7,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    buttonStyle: {
        width: '25%',
        marginHorizontal: 8,
        borderRadius: 16,
    },
    imageStyle: {
        width: 100,
        height: 100,
    }
});
import { StyleSheet, Text, View } from "react-native";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import { CustomButton } from "./CustomButton";
import { getFormattedDate } from "../util/date";
import { ExpenseContext } from "../store/ExpensesContext";
import { GlobalStyles } from "../styles";

export const ExpneseForm = ({onCancel, submitButtonLabel, onSubmit, defaultValue}) => {
    const [inputValues, setInputValues] = useState({
        amount: defaultValue ? defaultValue.amount.toString() : '',
        date: defaultValue ? getFormattedDate(defaultValue.date) : '',
        title: defaultValue ? defaultValue.title.toString() : '',
    });
    const [inputValid, setInputValid] = useState({
        amount: true,
        date: true,
        title: true,
    });

    function amountChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((prevState) => {
            return {
                ...prevState,
                [inputIdentifier] : enteredValue
            };
        });
    };

    function submitHandler() {
        const expenseData= {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            title: inputValues.title
        };
        const amntValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateValid = expenseData.date.toString() !== 'Invalid Date';
        const titleValid = expenseData.title.trim().length > 0;

        if (!amntValid || !dateValid || !titleValid) {
            setInputValid(
            {
                amount: amntValid,
                date: dateValid,
                title: titleValid,
            });
            return;
        }
        onSubmit(expenseData);
    };
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <CustomInput lable="Amount" 
                    style= {styles.rowInput}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: amountChangeHandler.bind(this, 'amount'),
                        value: inputValues['amount'],
                    }}
                    isValid = {inputValid.amount}

                >
                </CustomInput>
                <CustomInput lable="Date" 
                    style= {styles.rowInput}
                    textInputConfig={
                        {
                            placeholder: 'YYYY-MM-DD',
                            maxLength: 10,
                            onChangeText: amountChangeHandler,
                            onChangeText: amountChangeHandler.bind(this, 'date'),
                            value: inputValues['date'],
                        }
                    }
                    isValid ={inputValid.date}

                >
                </CustomInput>
            </View>    
            <CustomInput lable="Description"
                textInputConfig={
                    {
                        onChangeText: amountChangeHandler,
                        multiline: true,
                        autoCorrect: true,
                        autoCapitalize: 'sentences',
                        onChangeText: amountChangeHandler.bind(this, 'title'),
                        value: inputValues['title'],
                    }
                }
                isValid={inputValid.title}
            >
            </CustomInput>
            {!inputValid.amount || !inputValid.date || !inputValid.title ? 
            <Text style={styles.errorText}>Invalid input - please check you entered data</Text> : null}

            <View style={styles.buttonContainer}>
                <CustomButton 
                    mode='flat' 
                    onPress={onCancel}
                    style={styles.button}
                >Cancel</CustomButton>
                <CustomButton  
                    onPress={submitHandler}
                    style={styles.button}
                >{submitButtonLabel}</CustomButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        form: {
            marginTop: 40,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginVertical: 24
        },  
        inputsRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        rowInput: {
            flex: 1
        }, 
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            minWidth: 120,
            marginHorizontal: 8,
        },
        errorText: {
            textAlign: 'center',
            color: GlobalStyles.colors.error500,
            margin: 8,
        },
    }
);
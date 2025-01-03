import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../styles";

export const CustomInput = ({lable, textInputConfig, style, isValid}) => {
    let inputStyles = [styles.input, !isValid && styles.invalidInput];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.lable, !isValid && styles.invalidLabel]}>{lable}</Text>
            <TextInput {...textInputConfig} style={inputStyles}
            ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 4,
            marginVertical: 8,
        },
        lable: {
            fontSize: 12,
            color: GlobalStyles.colors.primary100,
            marginBottom: 4
        },
        input: {
            backgroundColor: GlobalStyles.colors.primary100,
            padding: 6,
            borderRadius: 8,
            fontSize: 18,
            color: GlobalStyles.colors.primary700
        },
        inputMultiline: {
            minHeight: 100,
            textAlignVertical: 'top',
        },
        invalidLabel: {
            color: GlobalStyles.colors.error500
        },
        invalidInput: {
            backgroundColor: GlobalStyles.colors.error50
        },
    }
);
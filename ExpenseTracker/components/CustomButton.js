import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles";

export const CustomButton = ({children, onPress, mode, style}) => {
    return (
        <View style={style}>
            <Pressable onPress={onPress}
                style={({pressed}) => {
                    return (
                        pressed && styles.pressed
                    );
                }}>
                <View style={[styles.button, mode==='flat' && styles.flatStyle]}>
                    <Text style={[styles.buttonText, mode==='flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        button: {
            borderRadius: 4,
            padding: 8,
            backgroundColor: GlobalStyles.colors.primary500,

        },
        flatStyle: {
            backgroundColor: 'transparent',
        },
        buttonText: {
            color: 'white',
            textAlign: 'center',
        },
        flatText: {
            color: GlobalStyles.colors.primary200,

        },
        pressed: {
            opacity: 0.75,
            backgroundColor: GlobalStyles.colors.primary100,
            borderRadius: 4,
        }
    }
);

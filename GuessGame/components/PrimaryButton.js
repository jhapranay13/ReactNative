import { Pressable, StyleSheet, Text, View } from "react-native";


export const PrimaryButton = ({children, onPress}) => {
    return (
        <View style={styles.ButtonOuterContainer}>
            <Pressable 
                style={(pressedEvent) => pressedEvent.pressed ? [styles.ButtonInnerContainer, styles.pressed] : styles.ButtonInnerContainer} 
                android_ripple={{color: '#640233'}}
                onPress = {onPress}
            >
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    ButtonOuterContainer: {
        borderRadius: 38,
        margin: 4,
        overflow: 'hidden',

    },
    ButtonInnerContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,
        overflow: 'hidden',

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',

    },
    pressed: {
        opacity: 0.25,
    }
});
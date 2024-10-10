import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export const GridTile = ({title, color, onPress}) => {
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color: '#ccc'}} onPress={onPress}
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} >
                <View style={[styles.innerContainer,  {backgroundColor: color}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white', // without this shadow won't work and IOS wont show shadow
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'andriod' ? 'hidden' : null // else hadow for IOs wont be visible
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.23
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});
import { Pressable, StyleSheet, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';

export const FavoriteButton = ({onPress, icon}) => {
    return (
        <Pressable onPress={onPress} 
            style={({pressed}) => pressed && styles.pressed}
        >
            <Ionicons name={icon} size={24} color="white"></Ionicons>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
});
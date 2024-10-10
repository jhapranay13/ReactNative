import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Colors } from "../utils/colors";

export const PlaceItem = ({place, onSelect}) => {
    return (
        <Pressable onPress={onSelect} style={({pressed}) => [styles.container, pressed && styles.pressed]}>
            <Image source={{uri: place.imageUri}} style={styles.image}></Image>
            <View style={styles.info}>
                <Text style={styles.title}>
                    {place.title}
                </Text>
                <Text style={styles.info}>
                    {place.location.lat}  { place.location.lng}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: 6,
      marginVertical: 12,
      backgroundColor: Colors.primary500,
      elevation: 2,
      shadowColor: 'black',
      shadowOpacity: 0.15,
      shadowOffset: {width: 1, height: 1},
      shadowRadius: 2,
      borderRadius: 4,
    },
    pressed: {
        opacity: 0.9,
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        height: 100,
    },
    info: {
        flex: 2,
        
        height: 100,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.gray700,
    },
    location: {
        fontSize: 18,
        color: Colors.gray700,
    }
  });
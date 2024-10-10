import { FlatList, StyleSheet, Text, View } from "react-native";
import { PlaceItem } from "./PlaceItem";
import { Colors } from "../utils/colors";

export const PlacesList = ({places}) => {

    if (!places || places.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No Places added yet</Text>
            </View>
        );    
    }

    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return <PlaceItem place={item}></PlaceItem>
            }}
            style={styles.list}
        >
        </FlatList>
    );
};

const styles = StyleSheet.create({
    fallbackContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200
    },
    list: {
        margin: 24,
    }
  });

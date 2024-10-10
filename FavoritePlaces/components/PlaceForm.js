import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../utils/colors";
import { ImagePicker } from "./ImagePicker";
import { LocationPicker } from "./LocationPicker";
import { OutlinedButton } from "./OutlinedButton";
import { Place } from "../models/Places";

export const PlaceForm = ({addPlaceHandler}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [imageLoc, setImageLoc] = useState();
    const [coordiante, setCoordinate] = useState();

    const changeTitleHandler = (enteredText) => {
        setEnteredTitle(enteredText);
    };

    const onPressHandler = () => {
       const place = new Place(enteredTitle, imageLoc, coordiante);
       addPlaceHandler(place);
    };
    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style= {styles.labels}>
                    Title
                </Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle}>
                </TextInput>
            </View>
            <ImagePicker getImage={setImageLoc}></ImagePicker>
            <LocationPicker setCoordinate={setCoordinate}></LocationPicker>
            <View>
                <OutlinedButton icon='save' onPress={onPressHandler}>Save</OutlinedButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    form: {
      flex: 1,
      padding: 24.
    },
    labels: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
  });
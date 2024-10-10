import { StyleSheet } from "react-native";
import { PlaceForm } from "../components/PlaceForm";
import { insert } from "../database/database";

export const AddPlaces = ({navigation}) => {
    const addPlaceHandler = (place) => {
      try{
        insert(place);
      } catch(err) {
        console.log(err);
      }
      navigation.navigate('AllPlaces', place);
    };
    return (
        <PlaceForm addPlaceHandler={addPlaceHandler}></PlaceForm>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
import { StyleSheet } from "react-native";
import { PlacesList } from "../components/PlacesList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

export const AllPlaces = ({route}) => {
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
      if (isFocused && route.params) {
        setSelectedPlaces((prevState) => {
          return [...prevState, route.params];
        });
      }
    }, [isFocused, route.params]);
    return (
        <PlacesList places={selectedPlaces}></PlacesList>
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
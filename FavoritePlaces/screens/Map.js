import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { IconButton } from "../components/IconButton";


export const Map = ({navigation}) => {
    const [selectedLoc, setSelectedLoc] = useState();
    const region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const selectedLocationHandler = (event) => {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
        setSelectedLoc( {lat: lat, lng: lng} );
    };

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLoc) {
            Alert.alert("No Location Picked", "Please Pick a location by tapping on the Map!");
            return;
        }
        navigation.navigate('AddPlaces', selectedLoc);
    }, [navigation, selectedLoc]);
    
    useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: (tintColor) => 
                <IconButton icon="save" 
                    size={24} 
                    color={tintColor}
                onPress={savePickedLocationHandler}>
                </IconButton>
        });
    },[navigation, savePickedLocationHandler]);

    return (
        <MapView 
            style={styles.map} 
            initialRegion={region} 
            onPress={selectedLocationHandler}>
                {selectedLoc && <Marker title="Picked Location" coordinate=
                    {{latitude: selectedLoc.lat, longitude: selectedLoc.lng}}></Marker> }
        </MapView>
    );
};

const styles = StyleSheet.create(
    {
        map: {
            flex: 1
        },
    }
);
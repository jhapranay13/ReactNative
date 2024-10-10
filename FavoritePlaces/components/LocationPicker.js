import { Alert, StyleSheet, View } from "react-native";
import { OutlinedButton } from "./OutlinedButton";
import { Colors } from "../utils/colors";
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from 'expo-location';
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

export const LocationPicker = ({setCoordinate}) => {
    const [locationPermissionInfo, requestPermission] = useForegroundPermissions();
    const navigation = useNavigation();
    const router = useRoute();
    const isFocused = useIsFocused();
    const [pickedLocation, setPickedLocation] = useState()

    const param = router.params;

    async function verifyPermission() {
        if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (locationPermissionInfo.status === PermissionStatus.DENIED) {
            Alert("Insufficient Permissions", 
                "You need to grant Location permissions to use this app");
            return false;
        }
        return true;
    }

    async function getLocationHandler() {
        const hasPermission = await verifyPermission();

        if (!hasPermission) {
            return;
        }
        const location = await getCurrentPositionAsync();
        setCoordinate({lat: location.coords.latitude, lng: location.coords.longitude})
    };

    function pickOnMapHandler() {
        navigation.navigate('Map');
    };

    useEffect( () => {

        if (param && isFocused) {
            setPickedLocation(param);
            setCoordinate(param);
        }
    }, [ param, isFocused]);
    return (
        <View>
            <View style={styles.mapPreview}>

            </View>
            <View style={styles.actions}>
                <OutlinedButton icon='location' onPress={getLocationHandler}>Locate User</OutlinedButton>
                <OutlinedButton icon='map' onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>

            </View>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        mapPreview: {
            width: '100%',
            height: 200,
            marginVertical: 8,
            backgroundColor: Colors.primary100,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center'
        },
        actions: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
    } 
);
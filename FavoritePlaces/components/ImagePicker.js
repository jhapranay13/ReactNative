import { launchCameraAsync, PermissionStatus, useCameraPermissions } from "expo-image-picker";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";
import { useState } from "react";
import { OutlinedButton } from "./OutlinedButton";

export const ImagePicker = ({getImage}) => {
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
    const [pickedImage, setPickedImage] = useState();

    async function verifyPermission() {

        if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
            Alert("Insufficient Permissions", 
                "You need to grant camera access to use this app");
            return false;
        }
        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermission();

        if (!hasPermission) {
            return;
        }
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        setPickedImage(image.assets[0].uri);
        getImage(image.assets[0].uri);
    };
    let imagePreview = <Text >No Image taken yet</Text>

    if (pickedImage) {
        imagePreview = <Image style={styles.image} source={{uri: pickedImage}} ></Image>
    }
    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton onPress={takeImageHandler} icon='camera'>Take Image</OutlinedButton>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',

    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100
    },
  });
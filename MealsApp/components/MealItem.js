import { useNavigation } from "@react-navigation/native";
import { Text, Pressable, View, Image, StyleSheet, Platform } from "react-native";

export const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('MealsDetail', {mealId: id});
    };
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={ {color: '#ccc'} }
                onPress={pressHandler}
                style={({pressed}) => [ pressed ? styles.buttonPressed : null]}>
                <View style={styles.innerView}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}></Image>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>    
            </Pressable>    
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        backgroundColor: 'white', // without this shadow won't work and IOS wont show shadow
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'andriod' ? 'hidden' : null // else hadow for IOs wont be visible
   
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
      marginHorizontal: 4,
      fontSize: 12  
    },
    innerView: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.23
    },
});
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import { FavoriteButton } from "../components/FavoriteButton";
import { FavoriteContext } from "../store/FavoriteContext";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteAction } from "../store/FavoriteRedux";

export const MealDetailScreen = ({route, navigation}) => {
    //const favContext = useContext(FavoriteContext);
    const favRedux = useSelector((state) => state.favMeal.ids);
    const mealId = route.params.mealId;
    const dispatch = useDispatch();
    console.log(favRedux, mealId);
    //const isFav = favContext.ids.includes(mealId);
    const isFav = favRedux.includes(mealId);
    console.log(isFav);
    const selectedMeal = MEALS.find((meal) => { return meal.id === mealId});
    const onPressHandler = () => {
        if (isFav) {
            //favContext.removeFav(mealId);
            dispatch(FavoriteAction.removeFav({id: mealId}))
        } else {
            //favContext.addFav(mealId);
            dispatch(FavoriteAction.addFav({id: mealId}))
        }
    };
    useLayoutEffect( () => 
        navigation.setOptions( {
            headerRight: () => {
                return <FavoriteButton icon={isFav ? 'star' : 'star-outline'} onPress={onPressHandler}></FavoriteButton>
            }
        })
    );
    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}></Image>
            <Text style= {styles.title}>
                {selectedMeal.title}
            </Text>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{selectedMeal.duration}</Text>
                <Text style={styles.detailItem}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.subTitle}>Ingredient</Text>
                </View>
                <View style={styles.listContainer}>
                    {selectedMeal.ingredients.map((ingredient) => {
                        return (
                            <View style={styles.listItems} key={ingredient} >
                                <Text  style={styles.itemText}>{ingredient}</Text>
                            </View>

                        );
                    })}
                </View>
                <View style={styles.titleContainer}>
                        <Text style={styles.subTitle}>Steps</Text>
                </View>
                <View style={styles.listContainer}>
                    {selectedMeal.steps.map((step) => {
                        return (
                            <View style={styles.listItems} key={step}>
                                <Text  style={styles.itemText}>{step}</Text>
                            </View>
                        );
                    })}
                </View>    
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
        color: 'white',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: 'white',
    },
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 6,
        margin: 4,
        textAlign: 'center',
    },
    titleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
    listItems: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: '#e2b497',

    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
        width: '80%'
    },
    listContainer: {
        width: '80%',
    },
    outerContainer: {
        alignItems: 'center'
    },
});
import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FavoriteContext } from "../store/FavoriteContext";
import { MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";
import { useSelector } from "react-redux";

export const FavoriteScreen = () => {
    // const favContext = useContext(FavoriteContext);
    const favRedux = useSelector((state) => state.favMeal.ids);
    //const displayMeal = MEALS.filter( meal => favContext.ids.includes(meal.id));
    const displayMeal = MEALS.filter( meal => favRedux.includes(meal.id));
    function renderMealItem (itemData) {
        return <MealItem 
            id= {itemData.item.id}
            title={itemData.item.title} 
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration} 
            complexity={itemData.item.complexity} 
            affordability ={itemData.item.affordability}
        ></MealItem>
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                data={displayMeal}
            >
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
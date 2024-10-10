import { StyleSheet, FlatList, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";
import { useLayoutEffect } from "react";

// can also use useRoute hook
export const MealsOverView = ({route, navigation}) => {
    const catId = route.params.categoryId;
    console.log(catId);
    
    const displayMeal = MEALS.filter(
        (item) => {
            return item.categoryIds.indexOf(catId) >= 0;
        }
    );
    

    useLayoutEffect( () => {
        const catTitle = CATEGORIES.find((catgory) => catgory.id === catId).title;

        navigation.setOptions({
            title: catTitle,
        });
    }, [catId, navigation]);

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
                {catId}
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

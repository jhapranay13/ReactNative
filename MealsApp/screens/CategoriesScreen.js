import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { GridTile } from '../components/GridTile';


// can also use useNavigation hook
export const CategoriesScreen = ({navigation}) => {

    function renderCategoryItem(itemData) {
        const onPress = () => {
            navigation.navigate('MealsOverView',
                {categoryId: itemData.item.id});
        };
        return <GridTile title={itemData.item.title} color={itemData.item.color} onPress={onPress}></GridTile>
    };

    return(
        <FlatList 
            data={CATEGORIES} 
            renderItem={renderCategoryItem}
            keyExtractor={(item) => { return item.id }}
            numColumns={2}
            style= {styles.screen}
        >
        </FlatList>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#24180f'
    }
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealsOverView } from './screens/MealsOverviewScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { FavoriteButton } from './components/FavoriteButton';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoriteScreen } from './screens/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons';
import { FavoriteContext, FavoriteContextProvider } from './store/FavoriteContext';
import { Provider } from 'react-redux';
import { store } from './store/FavoriteRedux';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#e4baa1'
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen}
        options={
          { 
             title: 'All Categories',
             drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size}></Ionicons>
           }}
      ></Drawer.Screen>
      <Drawer.Screen name="Favorite" component={FavoriteScreen}
        options={
          { 
             title: 'Fovorite',
             drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size}></Ionicons>
           }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      {/*<FavoriteContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='MealsCategories'
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}
          >
            <Stack.Screen 
              name="All Categories" 
              component={DrawerNav}
              options={{
                headerShown: false
              }}
            ></Stack.Screen>
           
            <Stack.Screen 
              name="MealsOverView" 
              component={MealsOverView}
              /*options={({route, navigation}) => {
                const catId = route.params.categoryId;

                return {
                  title: catId,
                };
              }}*/
            >
            </Stack.Screen>
            <Stack.Screen 
              name="MealsDetail" 
              component={MealDetailScreen}
              options={
               { /* 
                  headerRight: () => {
                    return <FavoriteButton/>
                  },*/
                  title: 'Details'
                }
              }
            >
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoriteContextProvider>*/}  
    </>
   
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

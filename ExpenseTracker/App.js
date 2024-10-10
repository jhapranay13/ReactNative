import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ManageExpense } from './screens/ManageExpense';
import { RecentExpense } from './screens/RecentExpense';
import { AllExpenses } from './screens/AllExpenses';
import { GlobalStyles } from './styles';
import { Ionicons } from '@expo/vector-icons'
import { IconButton } from './components/IconButton';
import { ExpenseContextProvider } from './store/ExpensesContext';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => 
        ({
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: 'white',
          tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: ({tintColor}) => {
            return (
              <IconButton name={"add"} size={24} color={tintColor} 
                onPress={() => {
                  navigation.navigate('ManageScreen');
                }}></IconButton>
            );
          }
        })
      }
    >
      <BottomTabs.Screen name="RecentExpense" component={RecentExpense}
        options={
          {
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({color, size}) => <Ionicons name="hourglass" size={size} color={color}></Ionicons>
          }
        }
      ></BottomTabs.Screen>
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses}
        options={
          {
            title: 'All Expenses',
            tabBarLabel: 'All Expenses',
            tabBarIcon: ({color, size}) => <Ionicons name="calendar" size={size} color={color}></Ionicons>
          }
        }
      ></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',

          }
        }>
          <Stack.Screen name="ExpensesOverview" component={ExpenseOverview} 
            options={
              {
                headerShown: false,
              }
            }
          ></Stack.Screen>

          <Stack.Screen name="ManageScreen" component={ManageExpense}
            options={
              {
                presentation: 'modal',
              }
            }
          ></Stack.Screen>
       </Stack.Navigator>
      </NavigationContainer>
      </ExpenseContextProvider>
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

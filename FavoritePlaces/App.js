import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { AllPlaces } from './screens/AllPlaces';
import { AddPlaces } from './screens/AddPlaces';
import { IconButton } from './components/IconButton';
import { Colors } from './utils/colors';
import { Map } from './screens/Map';
import { useEffect, useState } from 'react';
import { init } from './database/database';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInit, setDbInit] = useState(false);
  
  useEffect(() => {
    init().then(() => setDbInit(true));
  }, []);


  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={
            {
              headerStyle:{backgroundColor: Colors.primary500},
              headerTintColor: Colors.gray700,
              contentStyle: {backgroundColor: Colors.gray700},
            }
          }
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={
              ({navigation}) =>
             ({
                title: 'Your Favorite Places',
                headerRight: ({tintColor}) => 
                  <IconButton 
                    icon='add' 
                    size={24} 
                    color={tintColor} 
                    onPress= {() => {
                      navigation.navigate('AddPlaces');
                    }}
                  >
                  </IconButton>
             })
            }
          >
          </Stack.Screen>
          <Stack.Screen
            name="AddPlaces"
            component={AddPlaces}
            options= {
              {
                title: 'Add a new Place'
              }
            }
          >
          </Stack.Screen>
          <Stack.Screen
            name="Map"
            component={Map}
            options= {
              {
                title: 'Add a new Place'
              }
            }
          >
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

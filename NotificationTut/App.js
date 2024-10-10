import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});

export default function App() {

  useEffect(() => {
    async function configPushNotification() {
      const {status} = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== 'granted') {
        const {status} = Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert("Permission required", "Notifications needs Permission");
        return
      }

      const pushTokensData = await Notifications.getExpoPushTokenAsync(); // used to send data
    }
    configPushNotification();
  }, []);

  useEffect( () => {
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      console.log(notification);
      const userName = notification.request.content.data.userName;
      console.log(userName);
    });

    const subscription1 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
      const userName = response.notification.request.content.data.userName;
      console.log(userName);
    });

    return () => {
      subscription.remove();
      subscription1.remove();
    }
  }, []);

  const scheduleNotificationHandler = () => {
    console.log("Scheduling");
    Notifications.scheduleNotificationAsync(
      {
        content: {
          title: "My local Notifications", 
          body: "This is the body",
          data: {userName: 'Max'}
        },
        trigger: {
          seconds: 5
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Schedule Notification" onPress={scheduleNotificationHandler}></Button>
      <StatusBar style="auto" />
    </View>
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

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { GoalsInput } from './components/GoalsInput';
import { GoalsItem } from './components/GoalsItem';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onPressHandler = (enterdGoal) => {
    setCourseGoal((prevState) => {
      return [...prevState, 
        {text: enterdGoal, id: Math.random().toString()}];
    });
    modalClose();
  }

  const modalVisibleHandler = () => {
    setModalVisible(true);
  };

  const modalClose = () => {
    setModalVisible(false);
  };

  const onDeleteHandler = (id) => {
    setCourseGoal((prevState) => {
      return prevState.filter((goal) => goal.id != id);
    });
  };

  return (

    <>
    <StatusBar style="light" />

    <View style={styles.appContainer}>
      <Button title="Add Goals" onPress= {modalVisibleHandler} color='#5e0acc'></Button>
      <GoalsInput isVisible={modalVisible} onGoalsSet = {onPressHandler} closeModal={modalClose}></GoalsInput>
      <View style={styles.goalsContainer}>
        <FlatList 
          alwaysBounceVertical={false}  
          data={courseGoal}
          renderItem = {(itemData) => {
            // itemData.index
            return (
                <GoalsItem 
                  text= {itemData.item.text} 
                  onDeleteItem= {onDeleteHandler}
                  id={itemData.item.id}> 
                </GoalsItem>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}/>
        </View> 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop : 60,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e0858',
  },
  goalsContainer : {
    flex: 10,
  }, 
});


/*
<View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoal.map((goal, index, arr) => {return <View style={styles.goalItemView} key={goal}><Text style = {styles.goalItem}>{goal}</Text></View>})}
        </ScrollView>
       </View> 
    </View>
*/
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const GoalsItem = (props) => {
    
    return (
        <View style={styles.goalItemView} >

            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{color: '#dddddd'}}
                style={({pressed}) => {
                    return pressed && styles.pressedItem;
                }}
            >
                <Text style = {styles.goalItem}>
                    {props.text}
                </Text>
            </Pressable>
        </View>

    );
};


const styles = StyleSheet.create({
   
      goalItemView : {
        margin: 8,
        color: 'white',
        borderRadius: 6,
        backgroundColor: '#5e0acc'
      },
      goalItem: {
        padding: 8,
        color: 'white',
        borderRadius: 6,
        backgroundColor: '#5e0acc'
      },
      pressedItem: {
          opacity: 0.4,

      }
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { GameOver } from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [currentRound, setCurrentRound] = useState(0);

  let screen = <StartGameScreen onPickNumber={setUserNumber}></StartGameScreen>;

  if (userNumber) {
    screen = <GameScreen useNumber={userNumber} onGameOver={setGameOver} setCurrentRound={setCurrentRound}/>;
  }

  function onGameOverhandler() {
    setUserNumber('');
    setGameOver(false);
    setCurrentRound(0);
  };

  if(gameOver) {
    screen = <GameOver onPress={onGameOverhandler} guessNumber={userNumber} rounds={currentRound}></GameOver>
  }
  return (
    <>      
      <StatusBar 
        style="auto" 
      />
      <LinearGradient 
        style={styles.rootScreen}         
        colors={['#4e0329', '#ddb52f']}
      >       
        <ImageBackground 
          source={require('./assets/dice.jpg')}  
          resizeMode='cover'         
          style={styles.rootScreen}  
          imageStyle={styles.backgroundImage}       
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});

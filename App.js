import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import GameLoop from './systems/GameLoop';
import Entities from './entities';
export default function App() {
  
  const [gameEngine, setGameEngine] = useState(null)
  const [running, setRunning] = useState(false)
  const [score, setScore] = useState(0)
  
  function handleStart() {
    setRunning(true)
    gameEngine.swap(Entities())
  }

  useEffect(() => {
    setScore(0)
  }, [])
  

  return (
    <View style={[styles.container, { backgroundColor: "yellow" }]}>
      <Text style={{top: 0}}>{score}</Text>
      <GameEngine
        ref={(ref) => setGameEngine(ref)}
        running={running}
        systems={[GameLoop]}
        entities={Entities()}
        style={styles.engineStyle}
        onEvent={(e) => {
          switch(e.type) {
            case "GAME_OVER":
              setRunning(false)
              setScore(0)
              break     
            case "INCREASE_SCORE":
              setScore(score => score + 1)
              break
          }     
        }}
      >    
      </GameEngine>
      {
        // not running then show start button
        !running ?
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.text}>START GAME</Text>
          </TouchableOpacity>
        </View> : null
      } 
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({

  engineStyle: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

    startButton: {
    display: "flex",
    flexDirection: "row",
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: 100,
    height: 100,
    paddingHorizontal: 60,
    paddingVertical: 40,
    borderRadius: 5,
  },

  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 700,
  }
});

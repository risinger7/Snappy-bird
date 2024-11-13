import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameEngine } from "react-native-game-engine";
import GameLoop from "./systems/GameLoop";
import Entities from "./entities";
import Sound from "./Sound";

export default function App() {
  const [gameEngine, setGameEngine] = useState(null);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);

  function handleStart() {
    setScore(0);
    setRunning(true);
    gameEngine.swap(Entities());
  }

  return (
    <View style={[styles.viewContainer]}>
      <Text style={styles.score}>{score}</Text>
      <GameEngine
        ref={(ref) => setGameEngine(ref)}
        running={running}
        systems={[GameLoop]}
        entities={Entities()}
        style={styles.engineStyle}
        onEvent={(e) => {
          switch (e.type) {
            case "GAME_OVER":
              setRunning(false);
              break;
            case "INCREASE_SCORE":
              Sound();
              setScore((score) => score + 1);
              break;
          }
        }}
      ></GameEngine>
      {!running ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.buttonText}>START GAME</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  engineStyle: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },

  viewContainer: {
    flex: 1,
    backgroundColor: "#374955", // dark blue-grey
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#FACF5A",
  },

  startButton: {
    color: "#FACF5A",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FACF5A",
    borderStyle: "solid",
    borderWidth: "4px",
    borderColor: "#fff",
    width: 260,
    height: 140,
    paddingHorizontal: 60,
    paddingVertical: 40,
    borderRadius: 8,
  },

  buttonText: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    color: "#374955",
    fontSize: 18,
    fontWeight: "bold",
  },

  score: {
    top: 15,
    position: "absolute",
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#FACF5A",
  },
});

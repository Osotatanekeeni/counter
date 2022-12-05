import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    count == 0 ? setCount(0) : setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount((prevCount) => prevCount - prevCount);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View style={styles.buttons}>
        <Button text="Increase" onPress={increaseCount}></Button>
        <Button text="Decrease" onPress={decreaseCount}></Button>
        <Button text="Reset" onPress={resetCount}></Button>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    alignItems: "center",
    flexDirection: "column",
    fontSize: "8rem",
    fontWeight: 700,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

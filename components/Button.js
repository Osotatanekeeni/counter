import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Button(props) {
    const [count, setCount] = useState(props.count);
    const onPress = () => {
        console.log("pressed")
    }
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text>{props.text}</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5
    }
})
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Increment from "../components/increment";
import Decrement from "../components/decrement";
import { IndexButton } from "../components/buttonTemplate";

export default function Lab_3() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Lab 3</Text>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttons}>
        <Decrement value={count} setValue={setCount} />
        <Increment value={count} setValue={setCount} />
      </View>
      <IndexButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  counterText: {
    fontSize: 32,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    alignItems: "center",
  },
});

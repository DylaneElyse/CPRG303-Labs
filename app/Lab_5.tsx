import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { IndexButton } from "../components/buttonTemplate";

export default function Lab_5() {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Lab 5</Text>
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

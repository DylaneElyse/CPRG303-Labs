// this page allows you to define things that will show up everywhere in the application
// route layout
// alows you to apply setting formats throughout the app

import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return <Stack screenOptions={{ headerShown: true }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

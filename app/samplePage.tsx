import { View, Text, StyleSheet } from "react-native";
import { FruitButton, IndexButton } from "../components/buttonTemplate";
import { Link } from "expo-router";

export default function samplePage() {
  return (
    <View style={styles.container}>
      <Text>Page 2 (samplePage)</Text>
      <IndexButton />
      <FruitButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});

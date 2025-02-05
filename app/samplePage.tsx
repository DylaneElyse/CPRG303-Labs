import { View, Text, StyleSheet } from "react-native";
import { FruitButton, IndexButton } from "../components/buttonTemplate";

export default function samplePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 2</Text>
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
  text: {
    fontSize: 32,
    marginBottom: 20,
  }
});

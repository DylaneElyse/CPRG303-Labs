import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export function IndexButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Index Button" onPress={() => router.push("/")} />
    </View>
  );
}

export function SampleButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Sample Button" onPress={() => router.push("/samplePage")} />
    </View>
  );
}

export function FruitButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Fruit List Button" onPress={() => router.push("/fruitList")} />
    </View>
  );
}

export function Lab3Button() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Lab 3 Button" onPress={() => router.push("/Lab_3")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 24,
  },
});

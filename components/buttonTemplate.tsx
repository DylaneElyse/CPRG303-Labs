import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export function IndexButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Index" onPress={() => router.push("/")} />
    </View>
  );
}

export function SampleButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Sample" onPress={() => router.push("/samplePage")} />
    </View>
  );
}

export function FruitButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Fruit List" onPress={() => router.push("/fruitList")} />
    </View>
  );
}

export function Lab3Button() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Lab 3" onPress={() => router.push("/Lab_3")} />
    </View>
  );
}

export function Lab4Button() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Lab 4" onPress={() => router.push("/Lab_4")} />
    </View>
  );
}

export function Lab5Button() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Lab 5" onPress={() => router.push("/Lab_5")} />
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

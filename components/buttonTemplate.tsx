import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export function IndexButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Click me" onPress={() => router.push("/samplePage")} />
    </View>
  );
}

export function SampleButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Click me" onPress={() => router.push("/index")} />
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

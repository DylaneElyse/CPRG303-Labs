import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import { IndexButton } from "../components/buttonTemplate";

export default function ListPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check on some fruits:</Text>
      <View style={styles.buttonList}>
        <Button title="Apple" onPress={() => router.push("/fruits/apple")} />
        <Button title="Pear" onPress={() => router.push("/fruits/pear")} />
        <Button title="Mango" onPress={() => router.push("/fruits/mango")} />
      </View>
      <IndexButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 24,
  },
  buttonList: {
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
    fontWeight: "semibold",
    textAlign: "center",
  },
});

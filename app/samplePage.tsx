import { View, Text, StyleSheet } from "react-native";
import { SampleButton } from "../components/buttonTemplate";

export default function samplePage() {
  return (
    <View style={styles.container}>
      <Text>Page 2</Text>
      <SampleButton />
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

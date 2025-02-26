import { View, Text, StyleSheet } from "react-native";
import { FruitButton, Lab3Button, Lab4Button, Lab5Button, SampleButton } from "../components/buttonTemplate";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my app</Text>
      <SampleButton />
      <FruitButton />
      <Lab3Button />
      <Lab4Button/>
      <Lab5Button />
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
    title: {
      fontSize: 64,
      fontWeight: "bold",
      textAlign: "center",
    },
});



// import { Button, StyleSheet, Text, View } from "react-native";
// import { fruitList } from "../components/fruitList";

// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title}>Welcome to My App!</Text>
//         <Button title="Go to another page" onPress={() => {}} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// })

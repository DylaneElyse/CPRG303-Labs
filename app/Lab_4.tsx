import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import {
  itemSelected,
  VacationDestination,
  vacationDestinations as initialDestinations,
} from "../constants/list_items";

export default function Lab_4() {
  const [vacationDestinations, setVacationDestinations] =
    useState(initialDestinations);

  const handleSelect = (destination: VacationDestination) => {
    const updatedDestinations = vacationDestinations.map((item) => {
      if (item.id === destination.id) {
        item.selected = !item.selected;
      }
      return item;
    });
    setVacationDestinations([...updatedDestinations]);
    // itemSelected(destination);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destinations</Text>
      {vacationDestinations.map((destination) => (
        <View key={destination.id} style={styles.destinationContainer}>
          <Text style={[styles.text, { width: "50%" }]}>
            {destination.location}
          </Text>
          <Text style={styles.text}>{destination.price}</Text>
          <Text style={styles.text}>
            {destination.average_yearly_temperature}
          </Text>
          <TouchableOpacity onPress={() => handleSelect(destination)}>
            <Text>{destination.selected ? "\u2705" : "\u274C"}</Text>
          </TouchableOpacity>
        </View>
      ))}
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
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
  },
  destinationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    width: "90%",
  },
});

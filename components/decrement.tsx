import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

type DecrementProps = { value: number; setValue: (value: number) => void };

const Decrement: React.FC<DecrementProps> = ({ value, setValue }) => {
  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <View style={styles.buttonContainer}>
      <Button title="Decrease" onPress={handleDecrement} />
    </View>
  );
};

export default Decrement;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

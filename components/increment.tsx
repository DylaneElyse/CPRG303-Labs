import React from "react";
import { StyleSheet, View, Button } from "react-native";

type IncrementProps = { value: number; setValue: (value: number) => void };

const Increment: React.FC<IncrementProps> = ({ value, setValue }) => {
  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <View style={styles.buttonContainer}>
      <Button title="Increase" onPress={handleIncrement} />
    </View>
  );
};

export default Increment;

const styles = StyleSheet.create({
  buttonContainer: {
    color: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

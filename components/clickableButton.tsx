import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


export default function clickableButton() {
// const clickableButton = () => {
const [isClicked, setIsClicked] = useState(false);

const handlePress = () => {
setIsClicked(!isClicked); // Toggle the clicked state
};

return (
<View style={styles.container}>
    <TouchableOpacity
    onPress={handlePress}
    style={[
        styles.button,
        isClicked && styles.buttonClicked, // Apply red background if clicked
    ]}
    >
    <Text style={styles.buttonText}>X</Text>
    </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
button: {
backgroundColor: 'blue', // Default background color
padding: 15,
borderRadius: 5,
alignItems: 'center',
justifyContent: 'center',
},
buttonClicked: {
backgroundColor: 'red', // Background color when clicked
},
buttonText: {
color: 'white', // Text color
fontSize: 20,
},
});


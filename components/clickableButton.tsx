import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


export default function ClickableButton() {
const [isClicked, setIsClicked] = useState(false);

const handlePress = () => {
setIsClicked(!isClicked); 
};

return (
<View style={styles.container}>
    <TouchableOpacity
    onPress={handlePress}
    style={[
        styles.button,
        isClicked && styles.buttonClicked, 
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
height: 30,
width: 30,
backgroundColor: 'blue', 
borderRadius: 5,
alignItems: 'center',
justifyContent: 'center',
},
buttonClicked: {
backgroundColor: 'red', 
},
buttonText: {
fontWeight: 'bold',
color: 'white', 
fontSize: 12,
},
});


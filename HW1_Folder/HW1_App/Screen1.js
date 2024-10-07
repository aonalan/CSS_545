import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// creates screen with a "button" that when pressed takes you to Screen2
function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text style={styles.buttonText}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
}


// styles to set the button color to yellow and the text to black
// as well as to center the button
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',  
    fontSize: 18,
  },
});

export default Screen1;

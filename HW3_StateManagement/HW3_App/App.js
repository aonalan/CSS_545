import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // makes sure the app is fresh
    AsyncStorage.removeItem('savedInput');

    // Listen for app state changes
    const listener = AppState.addEventListener('change', handleAppStateChange);

    return () => listener.remove();
  }, []);

  const handleAppStateChange = async (nextAppState) => {
    if (nextAppState === 'active') {
      // Load state when app is resumed
      const savedInput = await AsyncStorage.getItem('savedInput');
      if (savedInput) setInputValue(savedInput);
    } else if (nextAppState.match(/inactive|background/)) {
      // Save state when app is minimized
      await AsyncStorage.setItem('savedInput', inputValue);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>If you type then leave the app and come back without stopping the app, 
        your text should still be here:</Text>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18, 
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 3,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
  },
};

export default App;

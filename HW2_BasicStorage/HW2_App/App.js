/*  I used the following dependencies: 
      npm install react-native-image-picker
      npm install react-native-fs
      npm install @react-native-async-storage/async-storage
 */


import React, { useState, useEffect } from 'react';
import { View, Button, Text, Image, TextInput, StyleSheet } from 'react-native';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';

const App = () => {
  const [imagePath, setImagePath] = useState(null); 
  const [userName, setUserName] = useState(''); // input field for user's name
  const [loadedName, setLoadedName] = useState('User'); // default greeting to 'User'
  const [imageKey, setImageKey] = useState(0);  // unique key to refresh the image

  // load the saved user's name when the app starts
  useEffect(() => {
    const loadInitialName = async () => {
      try {
        const savedName = await AsyncStorage.getItem('user_name');
        if (savedName) {
          setLoadedName(savedName);  // set saved name if it exists
        }
      } catch (err) {
        console.error('error when loading name:', err);
      }
    };
    loadInitialName();
  }, []);

  // save the selected image locally
  const handleSaveImage = async () => {
    launchImageLibrary({}, async (response) => {
      if (response.didCancel) {
        console.log('user cancelled image picker');
        return;
      }

      const fileUri = response.assets[0].uri;
      const fileName = 'savedImage.jpg';
      const destinationPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      try {
        await RNFS.copyFile(fileUri, destinationPath);
        console.log('image was saved to:', destinationPath);
      } catch (err) {
        console.error('error saving image:', err);
      }
    });
  };

  // load the saved image
  const handleLoadImage = async () => {
    const filePath = `${RNFS.DocumentDirectoryPath}/savedImage.jpg`;
    const fileExists = await RNFS.exists(filePath);

    if (fileExists) {
      setImagePath(filePath);
      setImageKey(prevKey => prevKey + 1);  // Force image refresh
    } else {
      console.log('could not find image');
    }
  };

  // save user's name to AsyncStorage
  const handleSaveName = async () => {
    try {
      await AsyncStorage.setItem('user_name', userName);
      setLoadedName(userName); // update the greeting immediately
    } catch (err) {
      console.error('error when saving name:', err);
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.welcome}>Hello {loadedName}!</Text>

      <Text>Save and Load Image</Text>
      <Button title="Pick and Save Image" onPress={handleSaveImage} />
      <Button title="Load Image" onPress={handleLoadImage} />
      {imagePath && (
        <Image
          key={imageKey}
          source={{ uri: `file://${imagePath}?${imageKey}` }}
          style={styles.image}
        />
      )}

      <Text>What is your name so it can be saved in settings?</Text>
      <TextInput
        placeholder="Enter your name"
        value={userName}
        onChangeText={setUserName}
        style={styles.input}
      />
      <Button title="Save Name" onPress={handleSaveName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
  },
});

export default App;

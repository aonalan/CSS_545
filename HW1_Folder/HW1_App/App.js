/*  I also had to install the following dependancies so that I could
    switch between pages in the application on android:
      npm install @react-navigation/native
      npm install @react-navigation/stack
      npm install react-native-screens react-native-safe-area-context
      npm install react-native-gesture-handler react-native-reanimated
 */

// nessesery for React and navigation between screens to work
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// imports the other two JS files for the 2 screens
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createNativeStackNavigator();

// initiates the 2 screens and starts the application on "Screen1"
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
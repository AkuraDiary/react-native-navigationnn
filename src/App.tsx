/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import AppNavigation from './components/Navigation';

function App(): React.JSX.Element {

  return (
    <AppNavigation/>
    // <NavigationContainer>
    //   <View>
    //     <Text>Bebek awokawo</Text>
    //   </View>
    // </NavigationContainer>
  );
}

export default App;

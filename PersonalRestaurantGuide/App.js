import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import AboutScreen from './AboutScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={ { title: 'Personal Restaurant Guide'}}/>
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home';
import WorkoutOptions from '../components/workoutOptions';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white'
        },
      };

    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: 'grey'}, headerTintColor: 'white' }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'PumpPal',
            }}
          />
          <Stack.Screen
            name="WorkoutOptions"
            component={WorkoutOptions}
            options={{
              title: 'Select type of workout',
            }}
          />
        </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
  export default HomeStack;
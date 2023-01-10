import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home';
import WorkoutOptions from '../components/workoutOptions';
import ExerciseLogs from '../components/exerciseLogs';
import SetLogs from '../components/setLogs';

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
          <Stack.Screen
            name="ExerciseLogs"
            component={ExerciseLogs}
            options={{
              title: 'Add Exercise Name',
            }}
            />
            <Stack.Screen
            name="SetLogs"
            component={SetLogs}
            options={{
              title: 'Add sets',
            }}
            />
        </Stack.Group>
        </Stack.Navigator>
    )
  }
  
  export default HomeStack;
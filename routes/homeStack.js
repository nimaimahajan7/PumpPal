import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home';
import WorkoutOptions from '../components/workoutOptions';
import ExerciseLogs from '../components/exerciseLogs';
import SetLogs from '../components/setLogs';
import AddExercise from '../components/addExercise';
import AddSetsForm from '../components/addSetsForm';

const MainStack = createNativeStackNavigator();

const HomeStack = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white'
        },
      };

    return (
        <MainStack.Navigator>
        <MainStack.Group
          screenOptions={{ headerStyle: { backgroundColor: 'grey'}, headerTintColor: 'white' }}>
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'PumpPal',
            }}
          />
          <MainStack.Screen
            name="WorkoutOptions"
            component={WorkoutOptions}
            options={{
              title: 'Select type of workout',
            }}
          />
          <MainStack.Screen
            name="ExerciseLogs"
            component={ExerciseLogs}
            options={{
              title: 'Add Exercise Name',
            }}
            />
            <MainStack.Screen
            name="AddExercise"
            component={AddExercise}
            options={{
              title: 'Add Exercise Information',
            }}
            />
            <MainStack.Screen
            name="SetLogs"
            component={SetLogs}
            options={{
              title: 'Add sets',
            }}
            />
            <MainStack.Screen
            name="AddSetsForm"
            component={AddSetsForm}
            options={{
              title: 'Add Set Information',
            }}
            />
        </MainStack.Group>
        </MainStack.Navigator>
    )
  }
  
  export default HomeStack;
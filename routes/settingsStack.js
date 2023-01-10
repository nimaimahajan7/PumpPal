import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../components/setttings';

const SetStack = createNativeStackNavigator();

const SettingsStack = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white'
        },
      };

    return (
        <SetStack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: 'grey'}, headerTintColor: 'white' }}>
          <SetStack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: 'Settings',
            }}
          />
        </SetStack.Navigator>
    )
  }
  
  export default SettingsStack;
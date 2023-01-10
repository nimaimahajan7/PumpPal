import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeStack from './routes/homeStack';
import SettingsStack from './routes/settingsStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} options={{
          color: 'black',
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({size }) => (
            <MaterialCommunityIcons name="home" size={size} />
          ),
        }}/>
        <Tab.Screen name="Settings" component={SettingsStack} options={{
          color: 'black',
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({size }) => (
            <MaterialCommunityIcons name="cog" size={size} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
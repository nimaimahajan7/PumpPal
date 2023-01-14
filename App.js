import * as React from 'react';
import { NavigationContainer, DefaultTheme, StackActions } from '@react-navigation/native';
import HomeStack from './routes/homeStack';
import SettingsStack from './routes/settingsStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './components/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import TabNavigator from './routes/TabNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer theme={MyTheme}>
    //   <Tab.Navigator screenOptions={{ headerShown: false }}>
    //     <Tab.Screen name="Primary" component={HomeStack} options={{
    //       color: 'black',
    //       tabBarLabel: 'Home',
    //       tabBarLabelStyle: {color: 'black'},
    //       tabBarIcon: ({size }) => (
    //         <MaterialCommunityIcons name="home" size={size} />
    //       ),
    //     }}/>
    //     <Tab.Screen name="Secondary" component={SettingsStack} options={{
    //       color: 'black',
    //       tabBarLabel: 'Settings',
    //       tabBarLabelStyle: {color: 'black'},
    //       tabBarIcon: ({size }) => (
    //         <MaterialCommunityIcons name="cog" size={size} />
    //       ),
    //     }}/>
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}
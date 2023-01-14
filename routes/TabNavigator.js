import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import SettingsStack from './settingsStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white'
        },
      };
return(
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Primary" component={HomeStack} options={{
          color: 'black',
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({size }) => (
            <MaterialCommunityIcons name="home" size={size} />
          ),
        }}/>
        <Tab.Screen name="Secondary" component={SettingsStack} options={{
          color: 'black',
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({size }) => (
            <MaterialCommunityIcons name="cog" size={size} />
          ),
        }}/>
      </Tab.Navigator>
    )
}
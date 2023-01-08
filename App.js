import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack'


export default function App() {
  return (
    <Navigator />
  );
}
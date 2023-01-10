import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';
import AddExercise from './components/addExercise';
import AddSets from './components/addSets';


export default function App() {
  return (
    <Navigator />
  );
}
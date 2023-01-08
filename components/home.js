import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }){
    const [workouts, setReviews] = useState([
        { date: 'December 26, 2022', type: 'Push', setNum: 1, exercise: 'Bench Press', reps: 9, weight: 55, key: '1' },
        { date: 'December 27, 2022', type: 'Push', setNum: 1, exercise: 'Bench Press', reps: 9, weight: 55, key: '2' },
        { date: 'December 28, 2022', type: 'Push', setNum: 1, exercise: 'Bench Press', reps: 9, weight: 55, key: '3' },
      ]);

      const pressHandler = () => {
        navigation.navigate('WorkoutOptions')
      }
    
      return (
        <View style={globalStyles.container}>
            <TouchableOpacity onPress = {pressHandler}>
               <Image
                   source={require('./addButton1.png')}
                   style = {styles.button}
                   resizemode="stretch"
               />
           </TouchableOpacity>
           <View style = {styles.addWorkout}>
               <Text style = {styles.addWorkoutText}>Add Workout</Text>
            </View>
          <FlatList data={workouts} renderItem={({ item }) => (
            <TouchableOpacity>
              <Card>
                <Text style = {styles.cardTitleText}>{ item.date }</Text>
                <Text style = {styles.cardText}>{ item.type }</Text>   
                <Text style = {styles.cardText}>Set {item.setNum }: </Text>
                <Text style = {styles.cardText}>{item.exercise }</Text>
                <Text style = {styles.cardText}>{item.reps} reps</Text>
                <Text style = {styles.cardText}>{ item.weight } lbs</Text>
              </Card>
            </TouchableOpacity>
          )} />
        </View>
      );
}

const styles = StyleSheet.create({
    cardText: {
        fontSize: 15,
    },
    cardTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    addWorkout: {
        paddingTop: 10,
        alignItems: 'center',
        paddingBottom: 15,
    },
    button: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 40,
    },
    addWorkoutText: {
        fontSize: 25
    }
});

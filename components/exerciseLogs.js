import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function ExerciseLogs({ navigation }){
    const [workouts, setReviews] = useState([
        {setNum: 1, exercise: 'Bench Press', reps: 9, weight: 55, key: '1' },
        {setNum: 1, exercise: 'Incline Press', reps: 9, weight: 55, key: '2' },
        {setNum: 1, exercise: 'Shoulder Press', reps: 9, weight: 55, key: '3' },
      ]);
      const renderSeparator = () => {
        return (
          <View
            style={globalStyles.cardDivider}
          />
        );
      };
    
       const pressHandler = () => {
         navigation.navigate('AddExercise')
       }
    
      return (
        <View style={globalStyles.container}>
          <FlatList data={workouts} renderItem={({ item }) => (
            <TouchableOpacity>
              <View>
              <Card>
                <Text style = {styles.cardTitleText}>{item.exercise }</Text>
                <Text style = {styles.cardText}>Set {item.setNum }: </Text>
                <Text style = {styles.cardText}>{item.reps} reps</Text>
                <Text style = {styles.cardText}>{ item.weight } lbs</Text>
              </Card>
              </View>
            </TouchableOpacity>
          )} 
          ListHeaderComponent={()=><View><TouchableOpacity  onPress={pressHandler}>
            <Image 
              source={require('./addButton1.png')}
              style = {styles.button}
              resizemode="stretch"
          />
          </TouchableOpacity>
          <View style = {styles.addWorkout}>
          <Text style = {styles.addWorkoutText}>Add Exercise</Text>
          </View>
          </View>
        }
        ItemSeparatorComponent={renderSeparator}
          />
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

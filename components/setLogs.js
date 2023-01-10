import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function SetLogs({ navigation }){
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
    
      // const pressHandler = () => {
      //   navigation.navigate('WorkoutOptions')
      // }
    
      return (
        <View style={globalStyles.container}>
          <FlatList data={workouts} renderItem={({ item }) => (
              <Card>
                <View style={{flexDirection: 'row'}}>
                <Text style = {styles.cardTitleText}>Set {item.setNum }: </Text>
                <Text style = {styles.cardText}>{item.reps} reps</Text>
                <Text style = {styles.cardText}>{ item.weight } lbs</Text>
                </View>
              </Card>
          )} 
          ListHeaderComponent={()=><View><TouchableOpacity>
            <Image 
              source={require('./addButton1.png')}
              style = {styles.button}
              resizemode="stretch"
          />
          </TouchableOpacity>
          <View style = {styles.addWorkout}>
          <Text style = {styles.addWorkoutText}>Add Set</Text>
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
        paddingHorizontal: 45
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

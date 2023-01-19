import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { db } from '../firebase';
import { query, collection, onSnapshot} from 'firebase/firestore'
import { auth } from '../firebase';


export default function SetLogs({ navigation }){
    const [workouts, setWorkouts] = useState([]);
    const [count, setCount] = useState(0);

      useEffect(() => {
        const userId = auth.currentUser.uid;
        const q = query(collection(db, `users/${userId}/workouts`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let workoutsArr = [];
          querySnapshot.forEach((doc) => {
            workoutsArr.push({ ...doc.data(), id: doc.id });
          });
          setWorkouts(workoutsArr);
        });
        return () => unsubscribe();
      }, []);

      const renderSeparator = () => {
        return (
          <View
            style={globalStyles.cardDivider}
          />
        );
      };
    
       const pressHandler = () => {
         navigation.navigate('AddSetsForm')
       }
      return (
        
        <View style={globalStyles.container}>
          <FlatList data={workouts} renderItem={({ item }) => (
              <Card>
                <View style={{flexDirection: 'row'}}>
                {/* <Text style = {styles.cardTitleText}>Set {count }: </Text> */}
                <Text style = {styles.cardText}>{item.reps} reps</Text>
                <Text style = {styles.cardText}>{ item.weight } lbs</Text>
                </View>
              </Card>
          )} 
          ListHeaderComponent={()=><View><TouchableOpacity onPress ={pressHandler}>
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
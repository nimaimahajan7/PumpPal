import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import CardWO from '../shared/cardWO';

export default function WorkoutOptions({ navigation }){
    const [lift, setLift] = useState([
       {name: 'PUSH', key: '1'},
        {name: 'PULL', key: '2'},
        {name: 'LEGS', key: '3'},
        {name: 'UPPER', key: '4'},
        {name: 'LOWER', key: '5'},
        {name: 'CHEST & BACK', key: '6'},
        {name: 'SHOULDERS', key: '7'},
        {name: 'ARMS', key: '8'},
        {name: 'FULL BODY', key: '9'},
    ]);

    const pressHandler = () => {
        navigation.navigate('ExerciseLogs')
      }

return(
    <View style = {styles.container}>
   
    
    <FlatList 
    data ={lift}  
    renderItem={({ item }) => (
        
        <View style = {styles.content}>
        <TouchableOpacity style ={styles.liftContainer} onPress ={pressHandler}>
        <View style = {styles.content1}>
            <CardWO>
                <Text style={styles.cardText}>{ item.name }</Text> 
            </CardWO>
            </View>
        </TouchableOpacity>
        </View>
        )}
        ListHeaderComponent={()=><Text style={styles.title}>What are you hitting today?</Text>}
        />

        </View>
    )
}

const styles = StyleSheet.create({

cardText: {
    fontSize: 24,
    fontWeight: 'bold',
},
    container: {
        flex: 1,
    },
    content1:  {
        flex:1,
    },
    content:{
        flex: 1,
    },  
    liftContainer: {
        alignSelf: 'center',
        flex: 1,
    },
title: {
    marginTop: 24,
    padding: 30,
    fontSize: 35,
    fontWeight:'bold',
},

});
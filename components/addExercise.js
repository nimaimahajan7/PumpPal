import { setStatusBarStyle } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button, Keyboard, TouchableWithoutFeedback} from 'react-native';

export default function addExercise(){
   
    

return ( 
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
   
    <Text style={styles.AAE}>ADD AN EXERCISE</Text>
    <Text style={styles.EN}>Exercise Name: </Text>
    <TextInput 
    style={styles.input}
    placeholder='e.g. Bench Press'/>
    <Text style={styles.compound}>Is this a compound movement?</Text>
   <View style={{flexDirection: 'row'}}>
   <TouchableOpacity >
    <Text style={styles.yes}>YES</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Text style={styles.no}>NO</Text>
    </TouchableOpacity>
    </View>
    <Text style={styles.rep}>Rep Range: </Text>
    <TextInput 
    style={styles.input}
    placeholder='e.g. 8-12'/>
    <TouchableOpacity>
    <Text style={styles.sets}>ADD SETS</Text>
    </TouchableOpacity>
</View>
</TouchableWithoutFeedback>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1
},
AAE: {
    marginTop: 24,
    padding: 30,
    fontSize: 35,
    fontWeight:'bold',
    backgroundColor: 'grey',
},
EN: {
    marginTop: 1,
    paddingTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
},
input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: 200,
},
compound: {
    marginTop: 1,
    paddingTop: 18,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
},
yes: {
    marginTop: 1,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    borderWidth: 2,
    backgroundColor: 'grey',
    width: 40
},
no: {
    marginTop: 1,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    borderWidth: 2,
    backgroundColor: 'grey',
    width: 40
},
rep:{
    marginTop: 1,
    paddingTop: 18,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
},
sets:{
    marginTop: 200,
    padding: 20,
    fontSize: 25,
    fontWeight:'bold',
    backgroundColor: '#E9DB63',
    width: 250,
    margin: 70,
    textAlign: 'center',
    borderWidth:2
}

});


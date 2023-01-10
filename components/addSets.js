import { setStatusBarStyle } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button, Keyboard, TouchableWithoutFeedback} from 'react-native';

export default function addExercise(){

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
    <View style={styles.container}>
    <Text style={styles.sets}>ADD SETS</Text>
    <Text style={styles.weight}>WEIGHT</Text>
    <TextInput 
    keyboardType='numeric'
    style={styles.input}
    placeholder='e.g. 100'/>
    <Text style={styles.reps}>REPS</Text>
    <TextInput 
    keyboardType='numeric'
    style={styles.input}
    placeholder='e.g. 10'/>
    <TouchableOpacity>
    <Text style={styles.addset}>SAVE SET</Text>
    </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sets: {
        marginTop: 24,
        padding: 30,
        fontSize: 35,
        fontWeight:'bold',
        backgroundColor: 'grey',
        textAlign: 'center'
    },
    weight: {
        marginTop: 1,
        paddingTop: 30,
        fontSize: 20,
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
    reps:{
        marginTop: 1,
        paddingTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    addset:{
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

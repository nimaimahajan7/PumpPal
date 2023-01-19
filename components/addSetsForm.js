import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button, Keyboard, TouchableWithoutFeedback} from 'react-native';
import App from '../App';
import { db } from '../firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, add} from 'firebase/firestore';
import { auth } from '../firebase';

export default function AddSetsForm({ navigation }){
    const [workouts, setWorkouts] = useState([]);
    const [repsInput, setRepsInput] = useState('');
    const [weightInput, setWeightInput] = useState('');
    const [count, setCount] = useState(0);

    const createWorkout = async (e) => {
        e.preventDefault(e)
        if(repsInput === '' || weightInput === ''){
            alert('Please enter a valid number')
            return
        }
        const userId = auth.currentUser.uid;
        try {
            await addDoc(collection(db, `users/${userId}/workouts`), {
                reps: repsInput,
                weight: weightInput
            });
            setRepsInput('')
            setWeightInput('')
            navigation.goBack();
          } catch (error) {
            console.log(error);
          }

    };
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
                    <View>
                        <Text style={styles.weight}>Weight(lbs)</Text>
                        <TextInput 
                            keyboardType='numeric'
                            style={styles.input}
                            placeholder='e.g. 100'
                            value={weightInput}
                            onChange={(e)=> setWeightInput(e.nativeEvent.text)}
                        />
                        <Text style={styles.reps}>Reps</Text> 
                        <TextInput 
                            keyboardType='numeric'
                            style={styles.input}
                            placeholder='e.g. 10'
                            value={repsInput}
                            onChange={(e)=> setRepsInput(e.nativeEvent.text)}
                        /> 
                    <TouchableOpacity style={styles.addsetButton} onPress={createWorkout}>
                        <View style = {styles.buttonText}>
                        <Text style ={{fontWeight: 'bold', fontSize: '25'}}>Save set</Text>
                        </View>
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
        padding: 10,
        fontSize: 35,
        fontWeight:'bold',
        textAlign: 'center'
    },
    weight: {
        marginTop: 1,
        paddingTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    input: {
        padding: 10,
        margin: 10,
        width: 200,
        borderRadius: 15,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    reps:{
        marginTop: 1,
        paddingTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    addsetButton:{
        marginTop: 200,
        backgroundColor: '#E9DB63',
        width: 250,
        height: 50,
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 15,
    },
    buttonText:{
        paddingLeft: 70,
        flexDirection: 'row',
        alignSelf: 'center',
        fontWeight: 'bold',

    }
});

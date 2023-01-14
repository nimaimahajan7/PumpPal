import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Formik } from 'formik';

export default function AddSetsForm(){

    // const pressHandler = () => {
    //     navigation.navigate('SetLogs')
    //   }

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
                        />
                        <Text style={styles.reps}>Reps</Text> 
                        <TextInput 
                            keyboardType='numeric'
                            style={styles.input}
                            placeholder='e.g. 10'
                        /> 
                    <TouchableOpacity style={styles.addsetButton} >
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
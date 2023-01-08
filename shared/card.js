import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: 25,
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 20, 
        marginVertical: 6,
        backgroundColor: '#D9D9D9',
    },
    cardContent:{
        marginLeft: 10,
        marginhorizontal: 100,
        marginVertical: 10,
        paddingLeft: 5,
    }
})
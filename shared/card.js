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
        backgroundColor: '#D9D9D9',
        marginHorizontal: 20,
        marginVertical: 10,
        textAlign: 'center',
    },
    cardContent:{
        marginLeft: 10,
        marginhorizontal: 100,
        marginVertical: 10,
        paddingLeft: 5,
    }
})
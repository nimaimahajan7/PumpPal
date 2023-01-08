import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function CardWO(props){
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
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#333',
        marginHorizontal: 20, 
        marginVertical: 6,
        backgroundColor: '#E9DB63',
        width: 189,
        height: 58,
        

    },
    cardContent:{
        marginTop: 13,
        paddingLeft: 5,
        alignContent: 'center',
    }
})
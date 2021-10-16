import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={style.Num}>
                {num}
            </Text>
        </View>
        
    )
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#05f',
        margin: 5,
        borderRadius: 25,
        justifyContent: 'center',
    },
    Num: {
        color: '#fff',
        textAlign: "center",
        
    }
})
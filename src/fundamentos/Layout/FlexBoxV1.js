import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';
export default props => {
    return (
        <View style={style.Center}>
            <Quadrado cor="#0f0"></Quadrado>
            <Quadrado cor="#f00"></Quadrado>
            <Quadrado cor="#00f"></Quadrado>
            <Quadrado cor="#ff0"></Quadrado>
        </View>
    )
}

const style = StyleSheet.create({
    SpaceBetween: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: "space-between"
    },
    SpaceAround: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: "space-around"
    },
    SpaceEvenly: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: "space-evenly"
    },
    Center: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: "center"
    },
    Start: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: "flex-start"
    },
    End: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: "flex-end"
    }
})
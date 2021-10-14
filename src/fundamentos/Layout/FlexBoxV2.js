import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';
export default props => {
    return (
        <View style={style.Baseline}>
            <Quadrado cor="#0f0"></Quadrado>
            <Quadrado cor="#f00"></Quadrado>
            <Quadrado cor="#00f"></Quadrado>
            <Quadrado cor="#ff0"></Quadrado>
        </View>
    )
}

const style = StyleSheet.create({
    Baseline: {
        backgroundColor: '#000',
        flexGrow: 1,
        justifyContent: "space-between",
        width: '100%',
        alignItems: "baseline"
    },
    Stretch: {
        backgroundColor: '#000',
        flexGrow: 1,
        justifyContent: "space-between",
        width: '100%',
        alignItems: "stretch"
    },
    Center: {
        backgroundColor: '#000',
        flexGrow: 1,
        justifyContent: "space-between",
        width: '100%',
        alignItems: "center"
    },
    Start: {
        backgroundColor: '#000',
        flexGrow: 1,
        justifyContent: "space-between",
        width: '100%',
        alignItems: "flex-start"
    },
    End: {
        backgroundColor: '#000',
        flexGrow: 1,
        justifyContent: "space-between",
        width: '100%',
        alignItems: "flex-end"
    }
})
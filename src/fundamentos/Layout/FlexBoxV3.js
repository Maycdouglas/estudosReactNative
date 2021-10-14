import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';
export default props => {
    return (
        <View style={style.Row}>
            <Quadrado cor="#0f0"></Quadrado>
            <Quadrado cor="#f00"></Quadrado>
            <Quadrado cor="#00f"></Quadrado>
            <Quadrado cor="#ff0"></Quadrado>
        </View>
    )
}

const style = StyleSheet.create({
    Row: {
        backgroundColor: '#000',
        height: 350,
        width: '100%',
        flexDirection: "row"
    },
    RowReverse: {
        backgroundColor: '#000',
        height: 350,
        width: '100%',
        flexDirection: "row-reverse"
    },
    Column: {
        backgroundColor: '#000',
        height: 350,
        width: '100%',
        flexDirection: "column"
    },
    ColumnReverse: {
        backgroundColor: '#000',
        height: 350,
        width: '100%',
        flexDirection: "column-reverse"
    }
})
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default props => {
    const lado = 50
    return (
        <View style={ {
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }} />
    )
}
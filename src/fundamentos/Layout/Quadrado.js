import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default props => {
    return (
        <View style={ {
            height: 20,
            width: 20,
            backgroundColor: props.cor || '#000'
        }} />
    )
}
import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';

export default props => {

    if(Platform.OS === 'android'){
        return (
            <Text>Android</Text>
        )
    } else if(Platform.OS === 'ios'){
        return (
            <Text>IOS</Text>
        )
    } else {
        return (
            <Text>Outra Plataforma!</Text>
        )
    }

    
}
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default ({num = 0}) => {
    return (
        //renderiza de acordo com o operador ternário
        <View>
            <Text>O resultado é:</Text>
            {num % 2 === 0
                ? <Text>Par</Text>
                : <Text>Ímpar</Text>
            }
        </View>     
    )
}
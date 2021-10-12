import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default props => {
    return (
        <Text>{props.nome} {props.sobrenome}</Text>
    )
}
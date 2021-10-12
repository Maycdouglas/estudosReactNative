import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default props => {
    return (
        <>
            <Text>Membros da Família:</Text>
            {props.children}
        </>
    )
}
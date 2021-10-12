import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default props => {

    function gerarNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button
            title="Executar"
            onPress={function() {
                const n = gerarNumero(props.min, props.max)
                props.funcao(n)
            }}
        />
    )
}
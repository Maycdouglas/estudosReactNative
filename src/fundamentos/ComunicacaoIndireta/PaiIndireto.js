import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FilhoIndireto from './FilhoIndireto';

export default props => {

    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <>
            <Text>{num}</Text>
            <FilhoIndireto
                min={10} 
                max={100}
                funcao={exibirValor}
            />
        </>
        
    )
}
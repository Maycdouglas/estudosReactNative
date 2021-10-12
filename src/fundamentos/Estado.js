import React, { useState } from 'react';
import { Text, Button } from 'react-native'

export default props => {

    const [numero, setNumero] = useState(props.valor)

    function somar() {
        setNumero(numero + 1)
    }

    function subtrair() {
        setNumero(numero - 1)
    }

    return (
        <>
            <Text>{numero}</Text>

            <Button 
                title="Somar"
                onPress={somar}
            />
            <Button 
                title="Subtrair"
                onPress={subtrair}
            />
        </>
    )
}
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default props => {

    const [nome,setNome] = useState('Teste!')

    return (
        <View>
            <Text>Componentes Controlados</Text>
            <Text>{nome}</Text>
            <TextInput 
                placeholder="Digite seu nome:"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
        
    )
}
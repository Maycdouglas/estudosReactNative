import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import If from './If';

export default props => {

    const usuario = props.usuario || {}
    return (
        <>
        <If teste={usuario && usuario.nome && usuario.email}>
            <Text>
                Usuário Logado: {usuario.nome} - {usuario.email}
            </Text>
        </If>
        </>
        
    )
}
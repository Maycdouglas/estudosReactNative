import React, { useState } from 'react';
import { View, Text, Button, FlatList} from 'react-native';
import produtos from './produtos';

export default props => {

    const produtoRender = ({item: p}) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <Text>Lista de Produtos 2:</Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}    
            />
        </>
    )
}
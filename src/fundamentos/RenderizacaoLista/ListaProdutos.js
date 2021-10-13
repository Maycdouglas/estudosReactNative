import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import produtos from './produtos';

export default props => {
    
    function obterLista() {
        return produtos.map(p => {
            //deve colocar o atributo key em cada elemento
            return  <Text key={p.id}>
                        {p.id}) {p.nome} tem preço R$ {p.preco}
                    </Text>
        })
    }

    return (
        <>
            <Text>Lista de Produtos:</Text>
            {obterLista()}
        </>
    )
}
import React from 'react';
import { Button } from 'react-native';

export default props => {

    function executar() {
        console.warn("Executou!")
    }

    return (     
        <>
            {/* Passando a função como referência */}
            <Button
                title="Executar 1!"
                onPress={executar}
                //Dessa forma a funcao seria executada toda vez que abrisse a tela
                // onPress={executar()} 
            />
            
            {/* Passando a função dentro da propriedade */}
            <Button
                title="Executar 2!"
                onPress={function() {
                    console.warn("Executou Botão 2!")
                }}
            />

            {/* Passando a arrow function dentro da propriedade */}
            <Button
                title="Executar 3!"
                onPress={() => console.warn("Executou Botão 3!")}
            />
        </>   
        
    )
}
import React, { Fragment } from 'react'
import { View, Text } from 'react-native'

//Para retornar mais de um elemento ao mesmo tempo fora de uma view, devemos usar o Fragment

//USANDO APENAS OS SIMBOLOS, NÃO PRECISA IMPORTAR

export default props => {
    return (
        <>
            <Text>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    )
}


// RETORNANDO NUMA VIEW

// export default props => {
//     return (
//         <View>
//             <Text>{props.principal}</Text>
//             <Text>{props.secundario}</Text>
//         </View>
//     )
// }

// USANDO REACT.FRAGMENT
// SE PRECISAR PASSAR UMA PROPRIEDADE, USAR ESTÁ FORMA

// export default props => {
//     return (
//         <React.Fragment>
//             <Text>{props.principal}</Text>
//             <Text>{props.secundario}</Text>
//         </React.Fragment>
//     )
// }


// USANDO FRAGMENT, IMPORTANDO ELE

// export default props => {
//     return (
//         <Fragment>
//             <Text>{props.principal}</Text>
//             <Text>{props.secundario}</Text>
//         </Fragment>
//     )
// }


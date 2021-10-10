import React from 'react';
import { Text } from 'react-native'

// export default props => {
//     const valor = Math.random() * (props.max - props.min) + props.min
//     return <Text>{Math.floor(valor)}</Text>
// }

export default ({min = 2, max = 1000}) => {
    const valor = Math.random() * (max - min) + min
    return <Text>{Math.floor(valor)}</Text>
}
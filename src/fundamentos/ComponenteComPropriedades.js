import React from 'react';
import { Text } from 'react-native'

export default (props) => {
    console.warn(props)
    return (
        <Text> 
            O valor {props.prop2} é maior que o valor {props.prop1}
        </Text>
    )
}

//FORMA ENXUTA

// export default props => (
//     <Text> 
//             O valor {props.prop2} é maior que o valor {props.prop1}
//         </Text>
// )



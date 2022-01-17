import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {

    const route = props.route || {params: {numero: 0}}
    
    return(
        <TextoCentral corFundo='pink'>
            Tela D - {route.params.numero}
        </TextoCentral>
    )
}
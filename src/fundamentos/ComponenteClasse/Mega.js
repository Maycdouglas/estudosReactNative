import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Numero from './Numero';

export default class Mega extends React.Component {

    state = {
        qntd: this.props.qntd,
        numeros: []
    }

    alterarQntdNumero = (qntdNum) => {
        this.setState({ qntd: +qntdNum}) //o + faz a string voltar a ser um numero 
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qntd).fill()
        .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
        .sort((a, b) => a - b)

        this.setState({numeros})
    }

    //forma diferente de fazer
    gerarNumeros2 = () => {
        const { qntd } = this.state
        const numeros = []

        for(let i = 0; i < qntd; i++) {
            numeros.push(this.gerarNumeroNaoContido(numeros))
        }

        numeros.sort((a,b) => a - b)
        this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero key={num} num={num}/>
        })
    }

    //essa é a função que vai ser retornada na tela
    render() {
        return (
            <>
                <Text>
                    Gerador de Mega-Sena: {this.state.qntd}
                </Text>
                <TextInput
                    keyboardType={'numeric'} //faz o teclado numérico aparecer para o usuário
                    style={ { borderBottomWidth: 1} }
                    placeholder="Quantidade de Números"
                    value={`${this.state.qntd}`} //precisa colocar os acentos pois só aceita string
                    onChangeText={this.alterarQntdNumero}//atributo responsavel por alterar o texto na tela
                />
                <Button
                    title="Gerar números"
                    onPress={this.gerarNumeros2}
                />
                {/* <Text>
                    {this.state.numeros.join(", ")}
                </Text> */}
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}  
                </View>
                
            </>  
        )
    }
}

// //FORMA COM CONSTRUTOR
// export default class Mega extends React.Component {

//     state = {
//         qntd: this.props.qntd
//     }

//     constructor(props) {
//         super(props)

//         this.state = {
//             qntd: props.qntd
//         }
//     }

//     //essa é a função que vai ser retornada na tela
//     render() {
//         return (
//             <Text>
//                 Gerador de Mega-Sena: {this.state.qntd}
//             </Text>
//         )
//     }
// }

// //OUTRA FORMA SEM ESTADO
// export default class Mega extends React.Component {

//     //essa é a função que vai ser retornada na tela
//     render() {
//         return (
//             <Text>
//                 Gerador de Mega-Sena: {this.props.qntd}
//             </Text>
//         )
//     }
// }


import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from '../fundamentos/ReactNavigation/screens/TelaA'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator 
        initialRouteName='TelaA'
        screenOptions={{headerShown: true}} //se for false, não terá título na tela. O padrão é true
        >
        <Stack.Screen 
            name="TelaA" 
            component={TelaA}
            options={{title: 'Muda o título do topo da tela'}}
            />
    </Stack.Navigator>
)
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TelaA from '../fundamentos/ReactNavigation/screens/TelaA'
import TelaB from '../fundamentos/ReactNavigation/screens/TelaB'
import TelaC from '../fundamentos/ReactNavigation/screens/TelaC'
import TelaD from '../fundamentos/ReactNavigation/screens/TelaD'
import PassoStack from '../fundamentos/ReactNavigation/components/PassoStack'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName='TelaB'>
        <Drawer.Screen name="TelaA" component={TelaA}/>
        <Drawer.Screen name="TelaB" component={TelaB}/>
        <Drawer.Screen name="TelaC" component={TelaC}/>
        <Drawer.Screen name="TelaD" component={TelaD}/>
    </Drawer.Navigator>
)
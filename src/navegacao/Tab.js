import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../fundamentos/ReactNavigation/screens/TelaA'
import TelaB from '../fundamentos/ReactNavigation/screens/TelaB'
import TelaC from '../fundamentos/ReactNavigation/screens/TelaC'
import TelaD from '../fundamentos/ReactNavigation/screens/TelaD'
import PassoStack from '../fundamentos/ReactNavigation/components/PassoStack'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        screenOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: { fontSize: 30 }
        }}
        >
        <Tab.Screen name="TelaA" component={TelaA}/>
        <Tab.Screen name="TelaB" component={TelaB}/>
        <Tab.Screen name="TelaC" component={TelaC}/>
        <Tab.Screen name="TelaD" component={TelaD}/>
    </Tab.Navigator>
)
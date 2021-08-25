import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { Alfabeto } from '../screens/Alfabeto';
import {Numeros } from '../screens/Numeros';
import { Informatica } from '../screens/Informatica';
import { LetrasAlfabeto } from '../components/LetrasAlfabeto';

export function AppRoutes(){
    
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions=
            {{headerShown: false}}
            >
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Alfabeto" component={Alfabeto} />
                <Stack.Screen name="Numeros" component={Numeros} />
                <Stack.Screen name="Informatica" component={Informatica} />
                <Stack.Screen name="LetrasAlfabeto" component={LetrasAlfabeto} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
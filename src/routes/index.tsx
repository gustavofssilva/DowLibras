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
import { LetraB } from '../components/Letras/LetraB';
import { LetraC } from '../components/Letras/LetraC';
import { LetraCC } from '../components/Letras/LetraCC';
import { LetraD } from '../components/Letras/LetraD';
import { LetraE } from '../components/Letras/LetraE';
import { LetraF } from '../components/Letras/LetraF';
import { LetraG } from '../components/Letras/LetraG';
import { LetraH } from '../components/Letras/LetraH';
import { LetraI } from '../components/Letras/LetraI';
import { LetraJ } from '../components/Letras/LetraJ';
import { LetraK } from '../components/Letras/LetraK';
import { LetraL } from '../components/Letras/LetraL';
import { LetraM } from '../components/Letras/LetraM';
import { LetraN } from '../components/Letras/LetraN';
import { LetraO } from '../components/Letras/LetraO';
import { LetraP } from '../components/Letras/LetraP';
import { LetraQ } from '../components/Letras/LetraQ';
import { LetraR } from '../components/Letras/LetraR';
import { LetraS } from '../components/Letras/LetraS';
import { LetraT } from '../components/Letras/LetraT';
import { LetraU } from '../components/Letras/LetraU';
import { LetraV } from '../components/Letras/LetraV';
import { LetraW } from '../components/Letras/LetraW';
import { LetraX } from '../components/Letras/LetraX';
import { LetraY } from '../components/Letras/LetraY';
import { LetraZ } from '../components/Letras/LetraZ';




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
                <Stack.Screen name="LetraB" component={LetraB} />
                <Stack.Screen name="LetraC" component={LetraC} />
                <Stack.Screen name="LetraCC" component={LetraCC} />
                <Stack.Screen name="LetraD" component={LetraD} />
                <Stack.Screen name="LetraE" component={LetraE} />
                <Stack.Screen name="LetraF" component={LetraF} />
                <Stack.Screen name="LetraG" component={LetraG} />
                <Stack.Screen name="LetraH" component={LetraH} />
                <Stack.Screen name="LetraI" component={LetraI} />
                <Stack.Screen name="LetraJ" component={LetraJ} />
                <Stack.Screen name="LetraK" component={LetraK} />
                <Stack.Screen name="LetraL" component={LetraL} />
                <Stack.Screen name="LetraM" component={LetraM} />
                <Stack.Screen name="LetraN" component={LetraN} />
                <Stack.Screen name="LetraO" component={LetraO} />
                <Stack.Screen name="LetraP" component={LetraP} />
                <Stack.Screen name="LetraQ" component={LetraQ} />
                <Stack.Screen name="LetraR" component={LetraR} />
                <Stack.Screen name="LetraS" component={LetraS} />
                <Stack.Screen name="LetraT" component={LetraT} />
                <Stack.Screen name="LetraU" component={LetraU} />
                <Stack.Screen name="LetraV" component={LetraV} />
                <Stack.Screen name="LetraW" component={LetraW} />
                <Stack.Screen name="LetraX" component={LetraX} />
                <Stack.Screen name="LetraY" component={LetraY} />
                <Stack.Screen name="LetraZ" component={LetraZ} />





            </Stack.Navigator>
        </NavigationContainer>
    )
}
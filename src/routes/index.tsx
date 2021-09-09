import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { Alfabeto } from '../screens/Alfabeto';
import {Numeros } from '../screens/Numeros';
import { Informatica } from '../screens/Informatica';
import { Creditos } from '../screens/Creditos';
import { Diaadia } from '../screens/Dia-a-dia';

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

import { Num0 } from '../components/Num/Num0';
import { Num1 } from '../components/Num/Num1';
import { Num2 } from '../components/Num/Num2';
import { Num3 } from '../components/Num/Num3';
import { Num4 } from '../components/Num/Num4';
import { Num5 } from '../components/Num/Num5';
import { Num6 } from '../components/Num/Num6';
import { Num7 } from '../components/Num/Num7';
import { Num8 } from '../components/Num/Num8';
import { Num9 } from '../components/Num/Num9';
import { Num10 } from '../components/Num/Num10';

import {Banheiro} from '../components/Dia/Banheiro'
import {Bom} from '../components/Dia/Bom'
import {Desculpa} from '../components/Dia/Desculpa'
import {Obrigado} from '../components/Dia/Obrigado'
import {Tudo} from '../components/Dia/Tudo'





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
                <Stack.Screen name="Creditos" component={Creditos} />
                <Stack.Screen name="Diaadia" component={Diaadia} />
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

                <Stack.Screen name="Num0" component={Num0} />
                <Stack.Screen name="Num1" component={Num1} />
                <Stack.Screen name="Num2" component={Num2} />
                <Stack.Screen name="Num3" component={Num3} />
                <Stack.Screen name="Num4" component={Num4} />
                <Stack.Screen name="Num5" component={Num5} />
                <Stack.Screen name="Num6" component={Num6} />
                <Stack.Screen name="Num7" component={Num7} />
                <Stack.Screen name="Num8" component={Num8} />
                <Stack.Screen name="Num9" component={Num9} />
                <Stack.Screen name="Num10" component={Num10} />

                <Stack.Screen name="Obrigado" component={Obrigado} />
                <Stack.Screen name="Tudo" component={Tudo} />
                <Stack.Screen name="Bom" component={Bom} />
                <Stack.Screen name="Desculpa" component={Desculpa} />
                <Stack.Screen name="Banheiro" component={Banheiro} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
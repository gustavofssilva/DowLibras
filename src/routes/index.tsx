import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}
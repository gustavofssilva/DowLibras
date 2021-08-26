import React from 'react';
import { View,Text } from 'react-native';
import { Voltar } from '../../components/Voltar';
import {styles} from './styles';

export function Numeros(){
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Voltar />
        </View>

        <View>
            <Text style={styles.mensagem}>
             Números em Libras 🤩
            </Text>
        </View>  

        </View>          
    )
};
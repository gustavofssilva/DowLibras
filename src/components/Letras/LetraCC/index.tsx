import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import { Voltar } from '../../Voltar';
import letraCC from '../../../assets/letraCC.png'
import { VoltarAlfabeto } from '../../VoltarAlfabeto';

export function LetraCC(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarAlfabeto/>
            </View>

            <View>
                <Text style={styles.mensagem}>
              Letra Ç
                </Text>

                <Image
                 source={letraCC}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

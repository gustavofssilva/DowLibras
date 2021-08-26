import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import { Voltar } from '../../Voltar';
import letraJ from '../../../assets/letraJ.png'
import { VoltarAlfabeto } from '../../VoltarAlfabeto';

export function LetraJ(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarAlfabeto/>
            </View>

            <View>
                <Text style={styles.mensagem}>
              Letra J
                </Text>

                <Image
                 source={letraJ}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

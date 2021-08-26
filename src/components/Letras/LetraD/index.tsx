import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import letraD from '../../../assets/letraD.png'
import { VoltarAlfabeto } from '../../VoltarAlfabeto';

export function LetraD(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarAlfabeto/>
            </View>

            <View>
                <Text style={styles.mensagem}>
              Letra D
                </Text>

                <Image
                 source={letraD}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

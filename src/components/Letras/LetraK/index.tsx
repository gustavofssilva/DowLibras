import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import { Voltar } from '../../Voltar';
import letraK from '../../../assets/letraK.png'
import { VoltarAlfabeto } from '../../VoltarAlfabeto';

export function LetraK(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarAlfabeto/>
            </View>

            <View>
                <Text style={styles.mensagem}>
              Letra K
                </Text>

                <Image
                 source={letraK}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import { Voltar } from '../../Voltar';
import letraB from '../../../assets/letraB.png'
import { VoltarAlfabeto } from '../../VoltarAlfabeto';

export function LetraB(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                 <VoltarAlfabeto />
            </View>

            <View>
                <Text style={styles.mensagem}>
              Letra B
                </Text>

                <Image
                 source={letraB}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

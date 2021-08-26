import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import { Voltar } from '../../Voltar';
import letraC from '../../../assets/letraC.png'
import { VoltarAlfabeto } from '../../VoltarAlfabeto';

export function LetraC(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarAlfabeto/>
            </View>

            <View>
                <Text style={styles.mensagem}>
              Letra C
                </Text>

                <Image
                 source={letraC}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

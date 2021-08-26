import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import { Voltar } from '../../Voltar';
import letraG from '../../../assets/letraG.png'
import { VoltarAlfabeto } from '../../VoltarAlfabeto';

export function LetraG(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarAlfabeto/>
            </View>

            <View>
                <Text style={styles.mensagem}>
              Letra G
                </Text>

                <Image
                 source={letraG}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

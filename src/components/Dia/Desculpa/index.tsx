import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import desculpa from '../../../assets/Desculpa.png'
import { VoltarNum } from '../../VoltarNum';
import { VoltarDia } from '../../VoltarDia';

export function Desculpa(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarDia />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Desculpa
                </Text>

                <Image
                 source={desculpa}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

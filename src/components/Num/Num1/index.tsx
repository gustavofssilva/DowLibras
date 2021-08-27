import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num1 from '../../../assets/Num1.png'
import { VoltarNum } from '../../VoltarNum';

export function Num1(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 1
                </Text>

                <Image
                 source={num1}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

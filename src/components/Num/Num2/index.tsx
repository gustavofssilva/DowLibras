import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num2 from '../../../assets/Num2.png'
import { VoltarNum } from '../../VoltarNum';

export function Num2(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 2
                </Text>

                <Image
                 source={num2}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

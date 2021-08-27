import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num3 from '../../../assets/Num3.png'
import { VoltarNum } from '../../VoltarNum';

export function Num3(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 3
                </Text>

                <Image
                 source={num3}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

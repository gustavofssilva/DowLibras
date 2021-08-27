import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num4 from '../../../assets/Num4.png'
import { VoltarNum } from '../../VoltarNum';

export function Num4(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 4
                </Text>

                <Image
                 source={num4}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

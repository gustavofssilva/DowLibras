import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num8 from '../../../assets/Num8.png'
import { VoltarNum } from '../../VoltarNum';

export function Num8(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 8
                </Text>

                <Image
                 source={num8}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

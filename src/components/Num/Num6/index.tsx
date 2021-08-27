import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num6 from '../../../assets/Num6.png'
import { VoltarNum } from '../../VoltarNum';

export function Num6(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 6
                </Text>

                <Image
                 source={num6}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

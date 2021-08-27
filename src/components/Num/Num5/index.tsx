import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num5 from '../../../assets/Num5.png'
import { VoltarNum } from '../../VoltarNum';

export function Num5(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 5
                </Text>

                <Image
                 source={num5}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

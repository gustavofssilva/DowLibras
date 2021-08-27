import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num7 from '../../../assets/Num7.png'
import { VoltarNum } from '../../VoltarNum';

export function Num7(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 7
                </Text>

                <Image
                 source={num7}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

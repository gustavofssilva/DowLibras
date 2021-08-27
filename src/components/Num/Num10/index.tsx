import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num10 from '../../../assets/Num10.png'
import { VoltarNum } from '../../VoltarNum';

export function Num10(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 10
                </Text>

                <Image
                 source={num10}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

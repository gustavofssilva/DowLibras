import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num0 from '../../../assets/Num0.png'
import { VoltarNum } from '../../VoltarNum';

export function Num0(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 0
                </Text>

                <Image
                 source={num0}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

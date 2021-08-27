import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import num9 from '../../../assets/Num9.png'
import { VoltarNum } from '../../VoltarNum';

export function Num9(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarNum />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Número 9
                </Text>

                <Image
                 source={num9}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'

import bom from '../../../assets/Bomdia.png'
import { VoltarNum } from '../../VoltarNum';
import { VoltarDia } from '../../VoltarDia';

export function Bom(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarDia />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Bom dia
                </Text>

                <Image
                 source={bom}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

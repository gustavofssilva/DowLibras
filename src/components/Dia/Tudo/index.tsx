import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import tudo from '../../../assets/Tudobem.png'
import { VoltarDia } from '../../VoltarDia';

export function Tudo(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarDia />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Tudo bem ?
                </Text>

                <Image
                 source={tudo}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

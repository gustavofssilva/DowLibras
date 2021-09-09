import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import obrigado from '../../../assets/Obrigado.png'
import { VoltarNum } from '../../VoltarNum';
import { VoltarDia } from '../../VoltarDia';

export function Obrigado(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarDia />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Obrigado
                </Text>

                <Image
                 source={obrigado}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

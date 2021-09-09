import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import banheiro from '../../../assets/Banheiro.png'
import { VoltarNum } from '../../VoltarNum';
import { VoltarDia } from '../../VoltarDia';

export function Banheiro(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <VoltarDia />
            </View>

            <View>
                <Text style={styles.mensagem}>
                Banheiro
                </Text>

                <Image
                 source={banheiro}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

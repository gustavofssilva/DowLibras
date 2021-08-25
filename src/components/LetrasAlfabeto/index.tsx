import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './styles'
import { Voltar } from '../../components/Voltar';
import letraA from '../../assets/letraA.png'

export function LetrasAlfabeto(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Voltar />
            </View>

            <View>
                <Text style={styles.mensagem}>
              Letra A
                </Text>

                <Image
                 source={letraA}
                 style={styles.image}
                 resizeMode={'stretch'}/> 


            </View>
            </View>
            
            
            )
            
        
        }

import React from 'react';
import { View,Text, Image } from 'react-native';
import { Voltar } from '../../components/Voltar';
import { styles } from './styles';
import fiap from '../../assets/Fiap.png'

export function Creditos(){
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Voltar />
        </View>

        <View>
            <Text style={styles.mensagemm}>
            Desenvolvedores ☺
            </Text>
        </View>  

        <Text style={styles.mensagem}>
           Gustavo Felix{'\n'}
           Renan Favano{'\n'}
           Wilson Pavanello{'\n'}
           Marlo Sandro
            </Text>

            <Image
                 source={fiap}
                 style={styles.image}
                 resizeMode={'stretch'}/> 





        </View>  
     
    )
};
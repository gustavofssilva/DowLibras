import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text } from 'react-native';
import { Botao } from '../../components/Botao';
import { Voltar } from '../../components/Voltar';
import {styles} from './styles';

export function Numeros(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Voltar />
        </View>

        <View>
            <Text style={styles.mensagemm}>
             Números em Libras 🤩
            </Text>
        </View>  

        <View style={styles.botaoespacoo}>
            <Botao
            title="0"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num0')}/>    
            

             <Botao
            title="1"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num1')} 
            />
                   

             <Botao
            title="2"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num2')} 
            />    

            <Botao
            title="3"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num3')} 
            />               
            </View> 

            <View style={styles.botaoespacoo}>
            <Botao
            title="4"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num4')}/>    
            

             <Botao
            title="5"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num5')} 
            />
                   

             <Botao
            title="6"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num6')} 
            />    

            <Botao
            title="7"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num7')} 
            />               
            </View> 

            <View style={styles.botaoespacoo}>
            <Botao
            title="8"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num8')}/>    
            

             <Botao
            title="9"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num9')} 
            />
                   

             <Botao
            title="10"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Num10')} 
            />    
              
            </View> 


            

           








        </View>          
    )
};
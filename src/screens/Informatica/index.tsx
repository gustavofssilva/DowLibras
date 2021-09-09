import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text } from 'react-native';
import { ButtonIconTres } from '../../components/ButtonIconTres';
import { Voltar } from '../../components/Voltar';
import { styles } from './styles';


export function Informatica(){
    const navigation = useNavigation()
   
    
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Voltar />
        </View>

        <View>
            <Text style={styles.mensagemm}>
           Coisas do Dia-a-Dia 😯
            </Text>
        </View>  

        <View style={styles.botaoespaco}>
            <ButtonIconTres
            title="Bom dia"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Bom')}/>  
              
            

             <ButtonIconTres
            title="Tudo bem?"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Tudo')} 
            />
                   

             <ButtonIconTres
            title="Obrigado"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Obrigado')} 
            />    

            <ButtonIconTres
            title="Desculpa"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Desculpa')} 
            /> 

             <ButtonIconTres
            title="Banheiro"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Banheiro')} 
            />                  
            </View> 
            
             
            
            

       




        </View>  
     
    )
};
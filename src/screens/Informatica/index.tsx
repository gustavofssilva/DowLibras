import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text } from 'react-native';
import { ButtonIconQuatro } from '../../components/ButtonIconQuatro';
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
          Informatica 👨‍💻
            </Text>
        </View>  

        <View style={styles.botaoespaco}>
            <ButtonIconQuatro
            title="Bom dia"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Bom')}/>  
              
            

             <ButtonIconQuatro
            title="Tudo bem?"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Tudo')} 
            />
                   

             <ButtonIconQuatro
            title="Obrigado"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Obrigado')} 
            />    

            <ButtonIconQuatro
            title="Desculpa"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Desculpa')} 
            /> 

             <ButtonIconQuatro
            title="Banheiro"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Banheiro')} 
            />                  
            </View> 
            
             
            
            

       




        </View>  
     
    )
};
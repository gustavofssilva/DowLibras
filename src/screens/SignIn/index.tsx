import React, {useState } from "react";
import {View, Text, TextInput,  StatusBar} from 'react-native';
import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation} from "@react-navigation/native";


export function SignIn(){
  const navigation = useNavigation()

  
const [text, setText] = useState(''); 

    return (
        <View style={styles.container}>
          <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
         
    
          <View style={styles.content}>
          <Text style={styles.title}>
             Bem vindo ao DowLibras {text}!
            </Text>

              
           

            <TextInput
            style={styles.input}
            onChangeText={(value) => setText(value)}
            placeholder={"Digite seu nome aqui"}
            placeholderTextColor={'white'} 
            />       

            <ButtonIcon
          title="Entrar no aplicativo"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}
        />
    
        
    
          </View>
        </View>
      );
    }
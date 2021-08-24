import React, {useState } from "react";
import {View, Text, TextInput, Image, StatusBar} from 'react-native';


import IllustrationImg from '../../assets/illustration.png'
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
          <Image
            source={IllustrationImg}
            style={styles.image}
            resizeMode={'stretch'}
          />
    
          <View style={styles.content}>
          <Text style={styles.title}>
             Bem vindo ao DowLibras {text}!
            </Text>

              
           

            <TextInput
            style={styles.input}
            onChangeText={(value) => setText(value)}
            placeholder={"Digite seu nome aqui"}

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
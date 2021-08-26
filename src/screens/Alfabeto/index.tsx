import React from 'react';
import { View,Text } from 'react-native';
import { styles } from './styles';
import { Botao } from '../../components/Botao';
import { Voltar } from '../../components/Voltar';
import { useNavigation } from '@react-navigation/native';


export function Alfabeto(){
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Voltar />
            </View>

            <View>
                <Text style={styles.mensagem}>
                  Alfabeto em Libras 🤔
                </Text>
            </View>
            <View style={styles.botaoespaco}>
            <Botao
            title="A"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('LetrasAlfabeto')}/>    
            

             <Botao
            title="B"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('LetraB')} 
            />
                   

             <Botao
            title="C"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('LetraC')} 
            />    

            <Botao
            title="Ç"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('LetraCC')} 
            />               
            </View> 


            <View style={styles.botaoespaco}>
            <Botao
            title="D"
            activeOpacity={0.7}/>

             <Botao
            title="E"
            activeOpacity={0.7}/>    

             <Botao
            title="F"
            activeOpacity={0.7}/>    

            <Botao
            title="G"
            activeOpacity={0.7}/>               
            </View> 


            <View style={styles.botaoespaco}>
            <Botao
            title="H"
            activeOpacity={0.7}/>

             <Botao
            title="I"
            activeOpacity={0.7}/>    

             <Botao
            title="J"
            activeOpacity={0.7}/>    

            <Botao
            title="K"
            activeOpacity={0.7}/>               
            </View> 

            <View style={styles.botaoespaco}>
            <Botao
            title="L"
            activeOpacity={0.7}/>

             <Botao
            title="M"
            activeOpacity={0.7}/>    

             <Botao
            title="N"
            activeOpacity={0.7}/>    

            <Botao
            title="O"
            activeOpacity={0.7}/>               
            </View> 

            <View style={styles.botaoespaco}>
            <Botao
            title="P"
            activeOpacity={0.7}/>

             <Botao
            title="Q"
            activeOpacity={0.7}/>    

             <Botao
            title="R"
            activeOpacity={0.7}/>    

            <Botao
            title="S"
            activeOpacity={0.7}/>               
            </View> 

            <View style={styles.botaoespaco}>
            <Botao
            title="T"
            activeOpacity={0.7}/>

             <Botao
            title="U"
            activeOpacity={0.7}/>    

             <Botao
            title="V"
            activeOpacity={0.7}/>    

            <Botao
            title="W"
            activeOpacity={0.7}/>               
            </View> 
            <View style={styles.botaoespaco}>
            <Botao
            title="X"
            activeOpacity={0.7}/>

             <Botao
            title="Y"
            activeOpacity={0.7}/>    

             <Botao
            title="Z"
            activeOpacity={0.7}/>    
           
            </View> 
            






        </View>        
    )
};
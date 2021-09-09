import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export function VoltarDia() {
    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <TouchableOpacity   onPress={() => navigation.navigate('Diaadia')} >
           <Ionicons name="md-arrow-back" size={40} color="#fff"/>
           </TouchableOpacity>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Voltar
                    </Text>
                    <Text style={styles.username}>
                        
                    </Text>
                </View>

                
                
            </View>
        </View>
    )
}
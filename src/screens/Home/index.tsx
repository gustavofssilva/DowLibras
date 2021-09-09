import React from 'react';
import { View,Text } from 'react-native';
import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { ButtonIconDois } from '../../components/ButtonIconDois';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
            </View>

            <View>
                <Text style={styles.mensagem}>
                   O QUE VAMOS APRENDER HOJE ?
                </Text>
            </View>

            <View style={styles.botaoespaco}>
            <ButtonIconDois
          title="Alfabeto"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Alfabeto')}
        />
            </View>

            <View style={styles.botaoespaco}>
            <ButtonIconDois
          title="Números"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Numeros')}
        />
            </View>

            <View style={styles.botaoespaco}>
            <ButtonIconDois
          title="Coisas do Dia-a-dia"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Diaadia')}
        />
            </View>
            

            <View style={styles.botaoespaco}>
            <ButtonIconDois
          title="Informática"
          activeOpacity={0.7}
          onPress={() => ('')}
        />
            </View>

            <View style={styles.botaoespacooo}>
            <ButtonIconDois
          title="Créditos"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Creditos')}
        />
            </View>
            
            
            











        </View>
    );
}
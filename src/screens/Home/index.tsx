import React from 'react';
import { View,Text } from 'react-native';
import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { ButtonIcon } from '../../components/ButtonIcon';
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
            <ButtonIcon
          title="Alfabeto"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Alfabeto')}
        />
            </View>

            <View style={styles.botaoespaco}>
            <ButtonIcon
          title="Números"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Numeros')}
        />
            </View>

            <View style={styles.botaoespaco}>
            <ButtonIcon
          title="Coisas do Dia-a-dia"
          activeOpacity={0.7}
          onPress={() => ('')}
        />
            </View>
            

            <View style={styles.botaoespaco}>
            <ButtonIcon
          title="Informática"
          activeOpacity={0.7}
          onPress={() => ('')}
        />
            </View>

            <View style={styles.botaoespacooo}>
            <ButtonIcon
          title="Créditos"
          activeOpacity={0.7}
          onPress={() => ('')}
        />
            </View>
            
            
            











        </View>
    );
}
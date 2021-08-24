import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Avatar } from '../Avatar';
import {SignIn} from '../../screens/SignIn';

export function Profile() {
    


    return (
        <View style={styles.container}>

            <Avatar urlImage="https://icon-library.com/images/profile-image-icon/profile-image-icon-26.jpg" />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá
                    </Text>
                    <Text style={styles.username}>
                    Usuário
                    </Text>
                </View>

                <Text style={styles.message}>
                    Bem vindo ao DowLibras!
                </Text>
            </View>
        </View>
    )
}
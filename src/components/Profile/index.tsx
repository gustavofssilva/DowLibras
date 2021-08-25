import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Avatar } from '../Avatar';

export function Profile() {
    


    return (
        <View style={styles.container}>

            <Avatar urlImage="http://simpleicon.com/wp-content/uploads/user1.png" />

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
                     Mãos que falam, amor espalham!
                    
                </Text>
                
            </View>
        </View>
    )
}
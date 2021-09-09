import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row'
    },
    greeting: {
        
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6,

    },
    username: {
     
        fontSize: 24,
        color: theme.colors.heading
    },
    message: {
       
        color: theme.colors.primary,
    },
});
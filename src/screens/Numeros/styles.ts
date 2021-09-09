import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#121212',
        color: theme.colors.heading,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 20,
       
    },
    mensagemm:{
        
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 50,
        lineHeight: 40,
        borderTopWidth:0.5 ,
        borderTopColor: "#fff"
    },
    botaoespacoo:{
        marginBottom: 90,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
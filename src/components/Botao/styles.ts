import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles=StyleSheet.create({
    container:{
        width:50,
        height:50,
        backgroundColor:theme.colors.primary,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        marginRight: 10,
        marginLeft: 20,
        
    },
    title:{
        flex:1,
        color: theme.colors.heading,
        fontSize:15,
        textAlign:'center',
    },
   
   

});
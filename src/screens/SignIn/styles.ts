import {StyleSheet} from 'react-native'
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        color: theme.colors.heading,


    },
    input:{
        height:45,
        width:300,
        borderBottomWidth:2,
        borderBottomColor: "#fff",
        marginBottom: 50,
        color: theme.colors.heading,
       
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
       
        lineHeight: 40
    },
    titlee: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 16,
       
        lineHeight: 40
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
      
        lineHeight: 25

    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,

    },
   
  
    
});
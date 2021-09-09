import React from "react";
import {Text,TouchableOpacity,TouchableOpacityProps,} from 'react-native';
import {styles} from './styles';

type Props = TouchableOpacityProps &{
    title : string;

}

export function ButtonIconTres({title, ...rest} : Props ){
    return(
        <TouchableOpacity
        style={styles.container}
       {...rest} >
           

            <Text style={styles.title}>
              {title}
            </Text>

        </TouchableOpacity>
    );
}
import React from "react";
import { SignIn} from './src/screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {AppRoutes} from './src/routes';
export default function App(){
  return(
   <AppRoutes/>

   
  );
}
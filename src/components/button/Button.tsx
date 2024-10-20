import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import buttonStyles from './ButtonStyles';
import { Colors } from '../../utils/Colors';

export interface IButtonTitle{
    title:string;
    onButtonPress:() => void;
}

const AppButton:React.FC<IButtonTitle> = ({title,onButtonPress}) => {
  return (
    <TouchableOpacity onPress={()=>onButtonPress()} activeOpacity={0.7}>
        <LinearGradient colors={[Colors.feijoa, Colors.lima]} style={buttonStyles.button}>
            <Text style={buttonStyles.buttonText}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
  )
}

export default AppButton;
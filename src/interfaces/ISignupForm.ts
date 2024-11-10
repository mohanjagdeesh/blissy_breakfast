import { StyleProp, TextStyle } from "react-native";

export interface ISignupFormProps {
    inputType: 'text' | 'password' | 'number';
    name: string;
    placeHolder:string;
    iconName:string;
}

export interface IInputRendererProps{
    inputAttributes:ISignupFormProps;
    value: string;
    onChangeText: (text: string) => void;
    showPassword?:boolean;
    setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
    inputContStyles?:StyleProp<TextStyle>;
    placeHolderColor?:string;
}

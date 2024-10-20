import React from 'react';
import { Input } from '@ant-design/react-native';
import { IInputRendererProps } from '../../interfaces/ISignupForm';
import { TouchableOpacity, View } from 'react-native';
import inputStyles from './InputRendererStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';

const InputRenderer: React.FC<IInputRendererProps> = ({ inputAttributes, value, onChangeText,showPassword,setShowPassword }) => {
  return (
    <View style={inputStyles.inputContainer}>
      <AntDesign size={23} name={inputAttributes?.iconName} />
      <Input
        style={inputStyles.inputElement}
        type={(inputAttributes?.inputType === 'password' && showPassword === true) ? 'text' : inputAttributes?.inputType}
        placeholder={inputAttributes?.placeHolder}
        value={value}
        onChangeText={onChangeText}
      />
      {inputAttributes?.inputType === 'password' ? <TouchableOpacity onPress={()=>setShowPassword?.(!showPassword)} activeOpacity={0.5}><IonIcons size={23} name={showPassword ? 'eye-outline' : 'eye-off-outline'} /></TouchableOpacity> : null}
    </View>
  );
};

export default InputRenderer;

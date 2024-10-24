import {  Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthNavigation from '../../../components/authnavigation/AuthNavigation';
import { Colors } from '../../../utils/Colors';
import RecoveryFlow from '../../../components/recoveryFlow/RecoveryFlow';
import { IRecoveryFlow } from '../../../interfaces/IRecoveryFlow';
import forgotPasswordStyles from './ForgotPasswordStyles';

const FORGOT_PASSWORD_OPTIONS:IRecoveryFlow = {
  title:'Forgot Password',
  description:'Please enter your email to get one time password',
  inputProps:{
    inputAttributes:{
      inputType:'text',
      name:'email',
      placeHolder:'Email Address',
      iconName:'mail'
    },
    value:'',
    onChangeText:()=>({}),
  },
  recoveryButton:{
    title:'Send link',
    onButtonPress:()=>(console.log('jagan')),
  }
}

const ForgotPassword = () => {
  const [forgotPasswordOptions , setForgotPasswordOptions] = useState(FORGOT_PASSWORD_OPTIONS);
  return (
    <View style={forgotPasswordStyles.container}>
      <AuthNavigation navigateTo='SignIn' arrowSize={30} arrowColor={Colors.black} headerTitle='Password Recovery' headerTitleColor={Colors.black} headerTitleSize={20} />
    <View style={forgotPasswordStyles.forgotPasswordContentContainer}>
      <RecoveryFlow {...forgotPasswordOptions} />
    </View>
    </View>
  );
};

export default ForgotPassword;

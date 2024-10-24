import { ImageBackground, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import signInStyles from './SignInStyles';
import AuthNavigation from '../../../components/authnavigation/AuthNavigation';
import { Form, Switch } from '@ant-design/react-native';
import { ISignupFormProps } from '../../../interfaces/ISignupForm';
import InputRenderer from '../../../components/inputRenderer/InputRenderer';
import AppButton from '../../../components/button/Button';
import * as Constants from '../../../utils/Constants';
import { IValidationRules } from '../../../interfaces/IValidation';
import { Colors } from '../../../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const signupFormAttributes: ISignupFormProps[] = [
  {
    inputType: 'text',
    name: 'username',
    placeHolder: 'Email Address',
    iconName: 'mail',
  },
  {
    inputType: 'password',
    name: 'password',
    placeHolder: '******',
    iconName: 'lock1',
  },
];


const validationRules:IValidationRules = {
  username: [
    { required: true, message: 'Email is required' },
    {min: 1 , message:'Email is required'},
    {pattern:Constants.emailRegex,message:'Email should contain @gmail.com'},
    {max: 35 , message:'Email should not exceed 35 characters'},
  ],
  password: [
    { required: true, message: 'Password is required' },
    { min: 8, message: 'Password must be at least 8 characters long' },
    { pattern: Constants.passwordRegex, message: 'Password must contain uppercase, lowercase, special character, and a number' },
    {max: 15, message:'Password should not exceed 15 characters'},
  ],
};

const SignInScreen = () => {
  const [showPassword,setShowPassword] = useState<boolean>(false);
  const [rememberMe,setRememberMe] = useState<boolean>(false);
  const [signinForm] = Form.useForm();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const sumbitFormDetails = () => {
    signinForm
      .validateFields()
      .then(values => {
        console.log('Form Values:', values);
      })
      .catch(errorInfo => {
        console.log('Validation Failed:', errorInfo);
      });
  };

  const signInFormHeader = () => {
    return (
      <View>
        <Text style={signInStyles.formHeader}>Welcome Back</Text>
        <Text style={signInStyles.formDescription}>Sign in to your account</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={signInStyles.container} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground 
          style={signInStyles.backgroundBanner}
          source={require('../../../assets/images/welcome_back_banner.png')}
          resizeMode="cover"
        >
          <AuthNavigation navigateTo='Home' arrowSize={40} arrowColor='white' headerTitle='Welcome' headerTitleColor={Colors.white} headerTitleSize={25} />
        </ImageBackground>
        <Form
          initialValues={{ username: '', password: ''}}
          style={signInStyles.formContainer}
          name="signUp"
          form={signinForm}
          renderHeader={signInFormHeader}
        >
          {signupFormAttributes.map((attribute) => (
            <Form.Item
              name={attribute.name}
              key={attribute?.name}
              rules={validationRules[attribute.name]}
              style={{ borderBottomWidth: 0, backgroundColor: 'transparent' }}
            >
              <InputRenderer
                inputAttributes={attribute}
                value={signinForm.getFieldValue(attribute.name)}
                onChangeText={(value) => signinForm.setFieldsValue({ [attribute.name]: value })}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </Form.Item>
          ))}
          <View style={signInStyles.memoryContainer}>
            <View style={signInStyles.remembermeContainer}>
              <Switch style={signInStyles.switchStyles} color={Colors.feijoa} checked={rememberMe} onChange={()=>setRememberMe(!rememberMe)}/>
              <Text style={signInStyles.remembermeTitle}>Remember me</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')} activeOpacity={0.7}>
              <Text style={signInStyles.forgotTitle}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <AppButton onButtonPress={sumbitFormDetails} title="SignIn" />
        </Form>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

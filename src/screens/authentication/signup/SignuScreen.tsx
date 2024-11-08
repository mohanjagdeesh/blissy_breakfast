import { ImageBackground, Text, View ,ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import React, { useState } from 'react';
import signupStyles from './SignupStyles';
import AuthNavigation from '../../../components/authnavigation/AuthNavigation';
import {
  Form,
  Toast
} from '@ant-design/react-native';
import { ISignupFormProps } from '../../../interfaces/ISignupForm';
import InputRenderer from '../../../components/inputRenderer/InputRenderer';
import AppButton from '../../../components/button/Button';
import * as Constants from '../../../utils/Constants';
import { IValidationRules } from '../../../interfaces/IValidation';
import { Colors } from '../../../utils/Colors';
import { createNewUser } from '../../../services/authentication/authentication';
import Loader from '../../../components/loader/Loader';
import { navigate } from '../../../utils/NavigationType';


const signupFormAttributes: ISignupFormProps[] = [
      {
        inputType: 'text',
        name: 'firstName',
        placeHolder:'First Name',
        iconName:'idcard',
      },
      {
        inputType: 'text',
        name: 'lastName',
        placeHolder:'Last Name(Optional)',
        iconName:'idcard',
      },
      {
        inputType:'number',
        name:'phone',
        placeHolder:'Phone number',
        iconName:'phone',
      },
      {
        inputType: 'text',
        name: 'email',
        placeHolder:'Email Address',
        iconName:'mail',
      },
      {
        inputType: 'password',
        name: 'password',
        placeHolder:'******',
        iconName:'lock1',
      },
];

const signUpFormValidationRules:IValidationRules = {
  firstName: [
    { required: true, message: 'First Name is required' },
    {min: 1 , message:'First Name is required'},
    {max: 25 , message:'First Name should not exceed 25 characters'},
  ],
  lastName: [
    {max: 15 , message:'Last Name should not exceed 15 characters'},
  ],
  phone: [
    { required: true, message: 'Phone Number is required' },
    {min: 1 , message:'Phone Number is required'},
    {pattern:Constants.phoneNumberRegex,message:'Phone number mustbe 10 digits'},
    {max: 35 , message:'Phone number should not exceed 10 characters'},
  ],
  email: [
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


const SignupScreen = () => {
  const [showPassword , setShowPassword] = useState<boolean>(false);
  const [signUpForm] = Form.useForm();
  const [isLoading,setIsLoading] = useState<boolean>(false);

  const signingUpUser = async () => {
    try{
      setIsLoading(true);
      const values = await signUpForm.validateFields();
      const response= await createNewUser(values);
      if(response?.success){
        signUpForm.resetFields();
        Alert.alert(
          "Account Created Successfully",
          "",
          [
            {
              text: "OK",
              onPress: () => navigate('SignIn'),
            },
          ]
        );
      }else{
        Alert.alert(`${response?.message}`);
      }
    }catch(error){
      console.log(error);
    }
    setIsLoading(false);
  };

  const signUpFormHeader = () => {
    return (
      <View>
        <Text style={signupStyles.formHeader}>Create account</Text>
        <Text style={signupStyles.formDescription}>Quickly create account</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={signupStyles.container} behavior='padding'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={!isLoading}>
        <ImageBackground
          style={signupStyles.backgroundBanner}
          source={require('../../../../src/assets/images/create_account_banner.png')}
          resizeMode='cover'
        >
          <AuthNavigation navigateTo='Home' arrowSize={40} arrowColor='white' headerTitle='Welcome' headerTitleColor={Colors.white} headerTitleSize={25} />
        </ImageBackground>
        <Form
          initialValues={{ username: '', password: ''}}
          style={signupStyles.formContainer}
          name="signUp"
          form={signUpForm}
          renderHeader={signUpFormHeader}
        >
          {signupFormAttributes.map((attribute) => (
            <Form.Item
              name={attribute.name}
              key={attribute?.name}
              rules={signUpFormValidationRules[attribute.name]}
              style={{ borderBottomWidth: 0, backgroundColor: 'transparent' }}
            >
              <InputRenderer
                inputAttributes={attribute}
                value={signUpForm.getFieldValue(attribute.name)}
                onChangeText={(value) => signUpForm.setFieldsValue({ [attribute.name]: value })}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </Form.Item>
            ))}
            <AppButton onButtonPress={signingUpUser} title="SignUp" />
          </Form>
          <Loader loaderState={isLoading} loadingText='Please wait we are creating an account for you...' />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

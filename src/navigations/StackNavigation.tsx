import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";
import Icon from 'react-native-vector-icons/Entypo';
import SignInScreen from '../screens/authentication/signin/SignInScreen';
import SignupScreen from '../screens/authentication/signup/SignuScreen'

export type RootStackParamList = {
  Root:undefined;
  Home: undefined;
  Login: undefined;

}

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        statusBarColor: '#0163d2',
        headerStyle: {
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
      options={{headerLeft: () => (
        <Icon
          name="menu"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          size={30}
          color="#fff"
        />
      ),}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown:false}}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{headerShown:false}}
        name="SignUp"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
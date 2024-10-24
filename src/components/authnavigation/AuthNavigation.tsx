import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import authNavigationStyles from './AuthNavigationStyles';
import { navigate } from '../../utils/NavigationType';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IAuthNavigation } from '../../interfaces/IAuthNavigation';


const AuthNavigation = ({navigateTo,arrowSize,arrowColor,headerTitle,headerTitleColor,headerTitleSize}:IAuthNavigation) => {
  return (
    <SafeAreaView>
    <View style={authNavigationStyles.authContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={()=>navigate(navigateTo)}>
      <AntDesign name="arrowleft" size={arrowSize} color={arrowColor} />
      </TouchableOpacity>
      <Text style={[authNavigationStyles.authHeaderTitle,{color:headerTitleColor,fontSize:headerTitleSize}]}>{headerTitle}</Text>
    </View>
    </SafeAreaView>
  )
}

export default AuthNavigation;
import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import authNavigationStyles from './AuthNavigationStyles';
import { Colors } from '../../utils/Colors';
import { navigate } from '../../utils/NavigationType';
import { SafeAreaView } from 'react-native-safe-area-context';


const AuthNavigation = () => {
  return (
    <SafeAreaView>
    <View style={authNavigationStyles.authContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={()=>navigate('Home')}>
      <AntDesign name="arrowleft" size={40} color={Colors.white} />
      </TouchableOpacity>
      <Text style={authNavigationStyles.welcomeTitle}>Welcome</Text>
    </View>
    </SafeAreaView>
  )
}

export default AuthNavigation;
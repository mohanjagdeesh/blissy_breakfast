import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity , Animated } from 'react-native';
import React, { useEffect ,useRef} from 'react';
import { ImageBackground } from 'react-native';
import homeScreenStyles from './HomeScreenStyles';
import InputRenderer from '../../components/inputRenderer/InputRenderer';
import { Colors } from '../../utils/Colors';
import Icon from 'react-native-vector-icons/Entypo';
import Packs from './Packs';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {

    const opacityAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const blinkAnimation = Animated.loop(
          Animated.sequence([
            Animated.timing(opacityAnim, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
          ])
        );

        const interval = setInterval(() => {
            blinkAnimation.start();
        }, 3000);
        
        return () => clearInterval(interval);
      
    },[opacityAnim]);
  return (
    <KeyboardAvoidingView
      style={homeScreenStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 60}
    >
        <View>
            <InputRenderer
            inputAttributes={{
                inputType: 'text',
                placeHolder: 'Search keywords...',
                name: 'searchKey',
                iconName: 'search1',
            }}
            value=""
            onChangeText={() => {}}
            inputContStyles={{
                backgroundColor: Colors.whisper,
                elevation: 5,
                marginVertical: 10,
                paddingVertical:2,
            }}
            placeHolderColor={Colors.black}
            />
        </View>
        <ImageBackground
            source={require('../../assets/images/home_banner.jpg')}
            resizeMode="cover"
            style={homeScreenStyles.homeBanner}
        >
        <Animated.View style={{ opacity: opacityAnim }}>
            <LinearGradient
                colors={[Colors.outrageousOrange, Colors.westSide, Colors.monza]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={homeScreenStyles.offerCont}
            >
                <Animated.Text style={homeScreenStyles.offerTitle}>
                20% off on your first purchase
                </Animated.Text>
            </LinearGradient>
        </Animated.View>
        </ImageBackground>
        <TouchableOpacity activeOpacity={0.6} style={homeScreenStyles.packTitleCont}>
            <Text style={homeScreenStyles.packTitle}>Our Popular Packs</Text>
            <Icon name='chevron-right' size={30} color={Colors.black} />
        </TouchableOpacity>
        <Packs/>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

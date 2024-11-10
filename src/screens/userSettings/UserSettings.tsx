import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import userSettingsStyles from './UserSettingsStyles';
import { launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { USER_SETTINGS_MOCK_DATA } from '../../mockData/UserSettingsMockData';
import { IUserSettings } from '../../interfaces/IUserSettings';
// import Icon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../utils/Colors';
import { navigate } from '../../utils/NavigationType';


const UserSettings = () => {
    const [profilePic , setProfilePic] = useState<string | undefined>('');
    const openGallery = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
          };

          launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const selectedImage = response.assets[0];
                setProfilePic(selectedImage.uri);
            }
        });
    };

  const renderUserSetting = (setting:IUserSettings,index:number) => {
    return(
          <TouchableOpacity onPress={() => navigate(setting.navigateTo)} activeOpacity={0.5} style={[userSettingsStyles.touchableSetting,index === USER_SETTINGS_MOCK_DATA.length - 1 && {marginBottom:0}]}>
            <View style={userSettingsStyles.settingContainer}>
              <Icon name={setting.settingIconName} size={25} color={Colors.feijoa} />
              <Text style={userSettingsStyles.settingTitle}>{setting.settingsTitle}</Text>
            </View>
            <View>
              {setting.leftArrow && <Icon name='arrow-right-thin' size={25} color={Colors.black} />}
            </View>
          </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={userSettingsStyles.container}>
      <View style={userSettingsStyles.imageCard}>
        <TouchableOpacity activeOpacity={0.1} style={userSettingsStyles.profileWallpaper} onPress={openGallery}>
            <View>
                {profilePic ? <Image style={userSettingsStyles.userPic} source={{uri:profilePic}} resizeMode='cover' /> : <Image style={userSettingsStyles.userPic} source={require('../../assets/icons/dummy_profile.png')} />}
            </View>
            <View style={userSettingsStyles.cameraIcon}>
                <Image source={require('../../assets/icons/camera-icon.png')} />
            </View>
        </TouchableOpacity>
      </View>
      <View style={userSettingsStyles.userDetailsCont}>
        <Text style={userSettingsStyles.userName}>Jagan Mohan Rao</Text>
        <Text style={userSettingsStyles.userEmail}>jaganmohanrao@gmail.com</Text>
      </View>
      <View style={userSettingsStyles.settingMainContainer}>
        <FlatList
            data={USER_SETTINGS_MOCK_DATA}
            renderItem={({item,index}) => renderUserSetting(item,index)}
            keyExtractor={(item)=> item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserSettings;
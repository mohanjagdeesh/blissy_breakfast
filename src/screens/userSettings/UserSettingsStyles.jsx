import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const userSettingsStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.whisper,
    },
    imageCard:{
        backgroundColor:Colors.white,
        height:100,
        marginBottom:70
    },
    profileWallpaper:{
        position: 'relative',
    },
    userPic:{
        height:114,
        width:114,
        borderRadius:57,
        position:'absolute',
        left:'50%',
        top:50,
        transform: [{ translateX: -57 }],
        borderWidth:2,
        borderColor:Colors.feijoa,
    },
    cameraIcon:{
        backgroundColor:Colors.lima,
        height:20,
        width:20,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        left:'57%',
        top:140

    },
    userDetailsCont:{
        flexDirection:'column',
        alignItems:'center',
        marginBottom:25
    },
    userName:{
        fontSize:15,
        fontWeight:'bold',
        color:Colors.black
    },
    userEmail:{
        fontSize:15,
        fontWeight:'400',
        color:Colors.codGray
    },
    settingMainContainer:{
        flexDirection:'column',
        paddingHorizontal:20,
    },
    touchableSetting:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:15
    },
    settingContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    settingTitle:{
        fontSize:16,
        fontWeight:'600',
        color:Colors.black
    }
});

export default userSettingsStyles;
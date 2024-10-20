import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const authNavigationStyles = StyleSheet.create({
    authContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:70,
    },
    welcomeTitle:{
        fontSize:25,
        color:Colors.white,
        fontWeight:'bold',
        marginHorizontal:'auto'
    }
})


export default authNavigationStyles;
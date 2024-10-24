import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";


const forgotPasswordStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    forgotPasswordContentContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20
    }
});



export default forgotPasswordStyles;
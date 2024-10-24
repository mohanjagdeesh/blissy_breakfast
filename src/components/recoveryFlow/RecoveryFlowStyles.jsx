import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const recoveryFlowStyles = StyleSheet.create({
    container:{
    },
    recoveryTitle:{
        fontSize:25,
        color:Colors.black,
        fontWeight:'bold',
        textAlign:'center'
    },recoveryDescription:{
        fontSize:15,
        color:Colors.gray,
        textAlign:'center',
        marginBottom:20
    }
});


export default recoveryFlowStyles;
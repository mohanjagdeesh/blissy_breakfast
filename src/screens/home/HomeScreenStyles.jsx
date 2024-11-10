import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const homeScreenStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.whisper,
        paddingHorizontal:15,
    },
    homeBanner:{
        width:'100%',
        height:350,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
    },
    offerCont:{
        paddingHorizontal:5,
        marginBottom:5,
    },
    offerTitle:{
        color:Colors.white,
        fontWeight:'bold',
        fontSize:20,
        marginRight:10,
        textAlign:'center',
    },
    packTitleCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:15,
    },
    packTitle:{
        fontSize:20,
        color:Colors.black,
        fontWeight:'bold',
    },
    packCont:{
        backgroundColor:Colors.white,
        elevation:5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:20,
        width:180,
        marginRight:15
    },
    packImage:{
        height:94,
        width:94,
        borderRadius:47,
    },
    packCost:{
        fontSize:15,
        fontWeight:'500',
        color:Colors.lima,
        marginVertical:10,
    },
    packName:{
        fontSize:15,
        fontWeight:'800',
        color:Colors.black,
    },
    packSeperator:{
        backgroundColor:Colors.indigo,
        height:1,
        width:'100%',
        marginVertical:10
    },
    seeDetailsCont:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    seeDetailsText:{
        fontSize:15,
        fontWeight:'bold',
        color:Colors.black,
    },
});



export default homeScreenStyles;
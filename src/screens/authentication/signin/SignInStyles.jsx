import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/Colors';

const SignInStyles = StyleSheet.create({
    container:{
        flex:1,
    },
    backgroundBanner:{
        flexDirection:'column',
        width: '100%',
        height: 500,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    formHeader:{
        fontSize:25,
        fontWeight:'bold',
        color:Colors.black,
    },
    formDescription:{
        fontSize:15,
        fontWeight:'400',
        color:Colors.gray,
        marginBottom:15,
    },
    formContainer:{
        backgroundColor:Colors.whisper,
        padding:15,
        marginTop:-12,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
});


export default SignInStyles;

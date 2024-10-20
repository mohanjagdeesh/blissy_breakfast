import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

const inputStyles = StyleSheet.create({
    inputContainer:{
        backgroundColor:Colors.white,
        borderRadius:8,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:6,
        marginBottom:10,
        borderWidth:1,
        borderColor:Colors.feijoa,
    },
    inputElement:{
        flex:1,
        marginLeft:10,
    },
})

export default inputStyles;

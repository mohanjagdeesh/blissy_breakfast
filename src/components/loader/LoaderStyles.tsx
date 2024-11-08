import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const loaderStyles = StyleSheet.create({
    loaderContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loader: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    loaderText: {
      color: Colors.white,
      marginTop: 10,
      fontSize: 20,
      fontWeight:'condensed',
      textAlign:'center'
    },
  });

  export default loaderStyles;
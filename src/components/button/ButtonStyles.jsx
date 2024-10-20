import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const buttonStyles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: 12,
        marginVertical: 15,
      },
      buttonText: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})


export default buttonStyles;
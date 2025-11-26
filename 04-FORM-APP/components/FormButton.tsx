import {
  TouchableOpacityProps,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type FormButtonProps = TouchableOpacityProps & {
  label: string;
  color: string;
};

export const FormButtonComponent = (
    {
        label,
        color,
        style,
        ...props
    }:FormButtonProps
) => {
    return(
        <TouchableOpacity {...props} style={[ styles.button, style, {backgroundColor:color}]}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    button:{
        width:'100%',
        borderRadius:8,
        paddingVertical:12,
        paddingHorizontal:10,
        justifyContent:'center'
    },

    text:{
    color:'#fff',
    fontWeight:'700',
    fontSize:16

    }


})

import { TextInputProps,View,Text, TextInput, StyleSheet } from "react-native";

type FormTextInputProps = TextInputProps & {
    label:string,
}

export const FormTextInputComponent =(
    {
        label,
        style,
        ...props
    }:FormTextInputProps
)=>{
    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>{label}</Text>
            <TextInput {...props} style={[styles.inputText,style]}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#fff',
        marginBottom:16

    },

    text:{
        fontSize:16,
        color:'black',
        marginBottom:4
        
    },

    inputText:{
        fontSize:12,
        borderWidth:1,
        color:'black',
        backgroundColor:"#fff",
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:12,
        borderColor:'#ccc'

    }

})
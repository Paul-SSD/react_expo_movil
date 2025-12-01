import { TextInput, TextInputProps, View, Text, StyleSheet } from "react-native";

type InputTextRFCProps = TextInputProps & { label: string }

// creamos el componente reutilizable
export const InputTextRFC: React.FC<InputTextRFCProps> = ({ label,
    style,
    ...props
}) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.label]}>{label}</Text>
            <TextInput {...props}
                style={[styles.inputText, style]}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 12

    },
    label: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 12,
        color: '#2f2f2f'

    },
    inputText: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#d9d9d9',
        color: '#2f2f2f',
        paddingHorizontal: 10,
        paddingVertical: 12
    }
})
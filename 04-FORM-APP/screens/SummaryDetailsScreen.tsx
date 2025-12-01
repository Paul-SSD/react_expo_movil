import { ButtonRFC } from "../components/ButtonRFC";
import { Person } from "../models/Person";
import { View, Text, StyleSheet } from "react-native";
type SummaryDetailsScreenProps = {
    person: Person;
    onPress: () => void;
};

// crear la vista materializada
export const SummaryDetailsScreen = ({
    person,
    onPress,
}: SummaryDetailsScreenProps) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>Summary Details</Text>
            <Text style={[styles.row]}> id:{person.id}</Text>
            <Text style={[styles.row]}> firstName:{person.firstName} </Text>
            <Text style={[styles.row]}> lastName:{person.lastName} </Text>
            <Text style={[styles.row]}> email:{person.email} </Text>
            <Text style={[styles.row]}>phone:{person.phone} </Text>

            <ButtonRFC
                label={"Finalizar"}
                color={"#FEF9C3"}
                onPress={onPress}
            ></ButtonRFC>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 16,
    },
    text: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 12,
        color: "#2f2f2f",
    },
    row: {
        fontSize: 20,
        color: "#3a3a3a",
        marginBottom: 6,
    },
});

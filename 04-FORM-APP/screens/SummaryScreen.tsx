import { Text, View, StyleSheet } from "react-native";
import { Person } from "../models/Person";
import { FormButtonComponent } from "../components/FormButton";

type SummaryScreenProps = {
  person: Person;
  onBack: () => void;
};

export const SummaryScreen = ({ person, onBack }: SummaryScreenProps) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}> Summary </Text>
      <View style={[styles.card]}>
        <Text style={styles.row}>Nombre: {person.firstName}</Text>
        <Text style={styles.row}>Apellido: {person.lastName}</Text>
        <Text style={styles.row}>Email: {person.email}</Text>
        <Text style={styles.row}>Phone: {person.phone}</Text>
      </View>

      <FormButtonComponent
        label={"Regresar"}
        color={"red"}
        onPress={onBack}
      ></FormButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  row: {
    fontSize: 16,
    marginBottom: 8,
    color: "black",
  },
});

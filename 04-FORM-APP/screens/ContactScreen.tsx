import { View, Text, StyleSheet } from "react-native";
import { FormTextInputComponent } from "../components/FormTextInput";
import { FormButtonComponent } from "../components/FormButton";
import { Person } from "../models/Person";

type ContactPersonScreenProps ={
    person:Person,
    onChange:(field:keyof Person, value:string)=>void,
    onNext:()=>void
}


export const ContactPersonScreen = ({
  person,
  onChange,
  onNext,
}: ContactPersonScreenProps) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}> Contact Information</Text>
      <FormTextInputComponent
        label={"Email"}
        placeholder="Ingresa tu email"
        value={person.email}
        onChangeText={(value: string) => onChange("email", value)}
      ></FormTextInputComponent>

      <FormTextInputComponent
        label={"Phone"}
        placeholder="Ingresa tu numero de telefono"
        value={person.phone}
        onChangeText={(value: string) => onChange("phone", value)}
      ></FormTextInputComponent>

      <FormButtonComponent
        label={"Siguiente"}
        color={"blue"}
        onPress={onNext}
      ></FormButtonComponent>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: "700",
      marginBottom: 16,
    },
  });
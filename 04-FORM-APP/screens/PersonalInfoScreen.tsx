import { Text, View, StyleSheet } from "react-native"
import { Person } from "../models/Person"
import { FormTextInputComponent } from "../components/FormTextInput"
import { FormButtonComponent } from "../components/FormButton"

 export type PersonalInfoScreenProps={
    // cualquier pantalla que use estos props
    // espera un objeto de tipo persona
    // y dos metodos para grabar los cambios en los campos de la pantalla
    person:Person,
    onChange:(field:keyof Person, value:string)=>void,
    onNext:()=>void
}   

// vista materializada
export const PersonalInfoScreen= ({
    person,
    onChange,
    onNext
}:PersonalInfoScreenProps)=>{
    return(
        <View style={[styles.container]}>
            <Text style={styles.title}>Personal Information</Text>
            <FormTextInputComponent label={"Nombre"}
            placeholder="Ingresa tu nombre"
            value={person.firstName}
            onChangeText={(value:string)=>onChange("firstName", value)}
            ></FormTextInputComponent>
            
            <FormTextInputComponent label={"Apellidos"}
            placeholder="Ingresa tu Apellido"
            value={person.lastName}
            onChangeText={(value:string)=>onChange("lastName",value)}></FormTextInputComponent>

            <FormButtonComponent label={"Siguiente"} color={"blue"}
            onPress={onNext} ></FormButtonComponent>
        </View>
    )

}

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


import { useState } from "react";
import { createEmptyPerson, Person } from "../models/Person";

export const usePersonForm =()=>{
    const INITIAL_STEP:number=0;
    const [step, setStep]=useState(INITIAL_STEP);
    const [person, setPerson]=useState<Person>(createEmptyPerson());

    // logica para actualizar los campos de form persona
    const updateField=(field:keyof Person, value:string)=>{
        setPerson(prev=>({...prev,[field]:value}))

    }

    // logica para ir a un step especifico
    const goToStep =(target:number)=>{
        setStep(target);
    }

    //logica para ir al siguiente step
    const goToNextStep=()=>{
        setStep(prev=>prev+1);
    }

    const goToBackStep =()=>{
        setStep(prev=>prev-1)
    }

    //logica para limpiar los campos del form
    const resetFormPerson =()=>{
        setPerson(createEmptyPerson());
    }

    // logica para ir a la primera pagina del form 
    const goToFirstStep =()=>{
        resetFormPerson();
        goToStep(INITIAL_STEP);
    }

    
    return {
        person,
        step,
        updateField,
        goToStep,
        goToBackStep,
        goToFirstStep,
        resetFormPerson,
        goToNextStep
    }


}
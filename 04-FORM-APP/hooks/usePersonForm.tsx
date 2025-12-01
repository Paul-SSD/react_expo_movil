import { useCallback, useMemo, useState } from "react";
import { PersonFormService } from "../services/PersonFormService";
import { Person } from "../models/Person";

export const usePersonForm = () => {
    const initPersonState = useMemo(() => PersonFormService.createInitState(), []);

    const [step, setStep] = useState<number>(initPersonState.step);
    const [person, setPerson] = useState<Person>(initPersonState.person);

    // actualizar los campos del form person
    const updateField = useCallback(
        (field: keyof Person, value: string) => {
            setPerson(prev => PersonFormService.updateField(prev, field, value));
        },
        [],
    );

    // ir al siguiente Step
    const goToNextStep = useCallback(
        () => {
            setStep(prev => PersonFormService.goToNextStep(prev));
        },
        [],
    );

    // ir al anterior step
    const goToPreviousStep = useCallback(
        () => {
            setStep(prev => PersonFormService.goToPreviousStep(prev));
        },
        [],
    );

    // crear un nuevo formulario persona
    const createNewPersonForm = useCallback(() => {
        const newPersonForm = PersonFormService.createInitState();
        setPerson(newPersonForm.person);
        setStep(newPersonForm.step);
    }, []);

    return {
        step,
        person,
        goToNextStep,
        goToPreviousStep,
        createNewPersonForm,
        updateField
    }







}
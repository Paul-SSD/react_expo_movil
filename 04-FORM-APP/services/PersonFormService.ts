import { PersonFormStep } from "../constants/PersonForumStep";
import { createEmptyPerson } from "../factory/PersonFactory";
import { Person } from "../models/Person";

export const PersonFormService = {
  createInitState: () => ({
    step: PersonFormStep.INIT,
    person: createEmptyPerson(),
  }),

  //ACTUALIZAR LOS CAMPOS DEL FORMULARIO PERSONA
  updateField: (person: Person, field: keyof Person, value: string) => ({
    ...person,
    [field]: value,
  }),

  // SIGUIENTE STEP
  goToNextStep: (currentStep: number) => {
    return Math.min(currentStep + 1, PersonFormStep.LAST);
  },

  // PREVIOUS STEP
  goToPreviousStep: (currentStep: number) => {
    return Math.max(currentStep - 1, PersonFormStep.INIT);
  },
};

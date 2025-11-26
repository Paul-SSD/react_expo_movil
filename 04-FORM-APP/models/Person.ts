export type Person ={
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    phone:string
}

// metodo para crear un objeto persona vacio
export const createEmptyPerson =():Person=>({
    id: crypto.randomUUID(),
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
})
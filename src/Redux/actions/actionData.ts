export const dataAction = (values:any) => {
    return{
        type:"SAVEDATA",
        values
    }
}

export const deleteDonar = (id:any) => {
    return {
        type:"REMOVE_DONAR",
        id
    }
}

export const updateDonar = (values:any) => {
    return{
        type:"UPDATE_DONAR",
        values
    }
}


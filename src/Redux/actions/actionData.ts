export const dataAction = (values:any) => {
    return{
        type:"SAVEDATA",
        values
    }
}

export const deleteDonar = (id:any) => {
    console.log("delete button clicked",id);
    return {
        type:"REMOVE_DONAR",
        id
    }
}

export const updateDonar = (values:any) => {
    console.log("update function clicked");
    return{
        type:"UPDATE_DONAR",
        values
    }
}


interface Form_Data {
    id:string,
    name:string,
    phone:Number,
    DateOfBirth:Date,
    Bloodgroup:string,
    Gender:string,
    City:string,
    State:string,
    Pincode: Number,
    RegDate: string,
    Address: string,
    Bloodbank: string,
    medical:string
}

export const dataAction = (values:Form_Data) => {
    return{
        type:"SAVEDATA",
        values
    }
}

export const deleteDonar = (id:string) => {
    return {
        type:"REMOVE_DONAR",
        id
    }
}

export const updateDonar = (values:Form_Data) => {
    return{
        type:"UPDATE_DONAR",
        values
    }
}

export const adminLogin = (values:any)=>{
    return{
        type:"Login",
        values
    }
}
export const adminLogout = (key:any)=>{
    return{
        type:"Logout",
        key
    }
}

export const updateStatus = (values:any)=>{
    return{
        type:"UPDATE_STATUS",
        values
    }
}



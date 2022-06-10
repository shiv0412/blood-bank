import { IAccountDetails, IBloodbankStock, IRegisteredDonor } from "../../models/models"


export const dataAction = (values:IRegisteredDonor) => {
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

export const updateDonar = (values:IRegisteredDonor) => {
    return{
        type:"UPDATE_DONAR",
        values
    }
}

export const adminLogin = (values:any)=>{
    return{
        type:"LOGIN_BLOODBANK",
        values
    }
}
export const adminLogout = (key:string)=>{
    return{
        type:"LOGOUT_BLOODBANK",
        key
    }
}

export const updateStatus = (values:any)=>{
    return{
        type:"UPDATE_STATUS",
        values
    }
}


export const updateStock =  (values:IBloodbankStock,bloodbank_name:string)=>{
    console.log("action fired",values);
    return{
        type:"UPDATE_STOCK",
        values,
        bloodbank_name
    }
}

export const registerBloodbank = (values:IAccountDetails)=>{
    return{
        type:"REGISTER_BLOODBANK",
        values
    }
}

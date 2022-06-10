import { IAccountDetails,IRegisteredDonor } from "../../models/models";

export interface IReduxStore{
    registeredDonars:IRegisteredDonor[] | null;
    adminAccount : IAccountDetails[] | null;
}

export const initialstate:IReduxStore={
    registeredDonars:[],
    adminAccount:[],
};                                                     

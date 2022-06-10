import { IAccountDetails,IBloodbankStock,IRegisteredDonor } from "../../models/models";

export interface IReduxStore{
    registeredDonars:IRegisteredDonor[] | null;
    adminAccount : IAccountDetails[] | null;
    stocks : IBloodbankStock[] | null;
}

export const initialstate:IReduxStore={
    registeredDonars:[],
    adminAccount:[],
    stocks:[],
};                                                     

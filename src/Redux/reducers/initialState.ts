import { IAccountDetails,IRegisteredDonor, IUserRequest } from "../../models/models";

export interface IReduxStore{
    registeredDonars:IRegisteredDonor[] | null;
    adminAccount : IAccountDetails[] | null;
    bloodRequests : IUserRequest[] | null;
}

export const initialstate:IReduxStore={
    registeredDonars:[],
    adminAccount:[],
    bloodRequests:[],
};                                                     

import { IAccountDetails,IRegisteredDonor } from "../../models/models";

interface IReduxStore{
    registeredDonars:IRegisteredDonor[] | null;
    adminAccount : IAccountDetails[] | null
}

export const initialstate:IReduxStore={
    registeredDonars:[],
    adminAccount:[],
};                                                     
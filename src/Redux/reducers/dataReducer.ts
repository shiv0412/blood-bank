import { IRegisteredDonor } from "../../models/models";
import { initialstate } from "./initialState";

export const dataReducer = (
  registeredDonars = initialstate.registeredDonars,
  action: any
) => {
  switch (action.type) {
    case "SAVEDATA":
      registeredDonars?.unshift({ ...action.values, id: Date.now() });
      return registeredDonars;

    case "REMOVE_DONAR":
      return registeredDonars?.filter(
        (values: IRegisteredDonor) => values.id !== action.id
      );

    case "UPDATE_DONAR":
      const exists = registeredDonars?.findIndex(
        (values: IRegisteredDonor) => values.id === action.values.id
      );
      if (exists !== undefined && exists > -1 && registeredDonars) {
        registeredDonars[exists] = action.values;
      }
      return registeredDonars;

    case "UPDATE_STATUS":
      const atThisIndex = registeredDonars?.findIndex(
        (values: IRegisteredDonor) => values.id === action.values.id
      );
      if (atThisIndex !== undefined && atThisIndex > -1 && registeredDonars) {
        registeredDonars[atThisIndex].Status = action.values.Status;
      }
      return registeredDonars;

    default:
      return registeredDonars;
  }
};

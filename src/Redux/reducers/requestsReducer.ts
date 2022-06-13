import { IUserRequest } from "../../models/models";
import { initialstate } from "./initialState";

export const requestsReducer = (
  requests = initialstate.bloodRequests,
  action: any
) => {
  switch (action.type) {
    case "NEW_REQUEST":
      requests?.unshift({
        ...action.values,
      });
      return requests;
      case "MANAGE_REQUEST":
        const exists = requests?.findIndex(
          (requests:IUserRequest) =>
            requests.bloodbank === action.values.bloodbank &&
            requests.patient_name === action.values.patient_name
        );
        if (exists !== undefined && exists > -1 && requests ) {
          requests[exists].requestProcessing.requestStatus= action.values.requestStatus;
          requests[exists].requestProcessing.comment = action.values.comment;
          requests[exists].requestProcessing.updatingDate = action.values.updatingDate
        }
        return requests;

    default:
      return requests;
  }
};

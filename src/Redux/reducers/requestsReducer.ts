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
    default:
      return requests;
  }
};

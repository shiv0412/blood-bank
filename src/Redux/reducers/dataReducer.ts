import { IRegisteredDonor } from "../../models/models";
import { initialstate } from "./initialState";



const dataReducer = (
  registeredDonars = initialstate.registeredDonars,
  action:any
) => {
  switch (action.type) {
    case "SAVEDATA":
      //return [...registeredDonars, { ...action.values, id: Date.now() }];
      if(registeredDonars){
        return [...registeredDonars,{...action.values,id:Date.now()}]
      }else{
        return [{...action.values}]
      }

    case "REMOVE_DONAR":
      return registeredDonars?.filter(
        (values:IRegisteredDonor) => values.id !== action.id
      );

    case "UPDATE_DONAR":
      console.log(action.values);
      registeredDonars?.filter(
        (values:IRegisteredDonor) => values.id === action.values.id
      );
      if(registeredDonars){
        return [...registeredDonars,{...action.values}]
      }else{
        return [{...action.values}]
      }

    case "UPDATE_STATUS":

      registeredDonars?.map((obj:IRegisteredDonor) => {
        if(obj.id === action.values.id){
          obj.Status = action.values.Status;
        }
      })
      return registeredDonars;

    default:
      return registeredDonars;
  }
};

export default dataReducer;

import { initialstate } from "./initialState";

interface Action_Data{
type:string;
values: {
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
}; 
id: string;
}

const dataReducer = (state = initialstate, action:Action_Data) => {
  switch (action.type) {
    case "SAVEDATA":
      return [...state, { ...action.values, id: Date.now() }];

    case "REMOVE_DONAR":
      return state.filter((values:Action_Data["values"]) => values.id !== action.id);

    case "UPDATE_DONAR":
      var data = state;
      state = data.filter((values:Action_Data["values"]) => values.id !== action.values.id);
      return [...state, { ...action.values}];

    default:
      return state;
  }
};

export default dataReducer;

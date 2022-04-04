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

const dataReducer = (state = [], action:Action_Data) => {
  switch (action.type) {
    case "SAVEDATA":
      return [...state, { ...action.values, id: Date.now() }];

    case "REMOVE_DONAR":
      return state.filter((values:Action_Data["values"]) => values.id !== action.id);

    case "UPDATE_DONAR":
      state.map((cvalue:Action_Data["values"]) => {
        if (cvalue.id === action.values.id) {
          return (
            (cvalue.name = action.values.name),
            (cvalue.phone = action.values.phone),
            (cvalue.Bloodgroup = action.values.Bloodgroup),
            (cvalue.Bloodbank = action.values.Bloodbank),
            (cvalue.DateOfBirth=action.values.DateOfBirth),
            (cvalue.Gender= action.values.Gender),
            (cvalue.City= action.values.City),
            (cvalue.State= action.values.State),
            (cvalue.Pincode=action.values.Pincode),
            (cvalue.RegDate= action.values.RegDate),
            (cvalue.Address= action.values.Address)
          );
        }
      });
      return state;

    default:
      return state;
  }
};

export default dataReducer;

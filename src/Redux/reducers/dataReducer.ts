const dataReducer = (state = [], action: any) => {
  switch (action.type) {
    case "SAVEDATA":
      return [...state, { ...action.values, id: Date.now() }];
      break;

    case "REMOVE_DONAR":
      return state.filter((values: any) => values.id !== action.id);
      break;

    case "UPDATE_DONAR":
      state.map((cvalue: any) => {
        if (cvalue.id == action.values.id) {
          return (
            (cvalue.name = action.values.name),
            (cvalue.phone = action.values.phone),
            (cvalue.Bloodgroup = action.values.Bloodgroup),
            (cvalue.Bloodbank = action.values.Bloodbank),
            (cvalue.DateOfBirth=action.values.DateOfBirth),
            (cvalue.Gender= action.values.Gender),
            (cvalue.City= action.values.City),
            (cvalue.State= action.value.State),
            (cvalue.Pincode=action.value.Pincode),
            (cvalue.RegDate= action.value.RegDate),
            (cvalue.Address= action.value.Address)
          );
        }
      });
      return state;

    default:
      return state;
  }
};

export default dataReducer;

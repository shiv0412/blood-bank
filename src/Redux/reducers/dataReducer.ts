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
            (cvalue.Bloodbank = action.values.Bloodbank)
          );
        }
      });
      return state;

    default:
      return state;
  }
};

export default dataReducer;
